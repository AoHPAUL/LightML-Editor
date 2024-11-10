const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

const currentVersion = 'v0.01a';

// Serve static files from the current directory (same folder as server.js)
app.use(express.static(__dirname));

// Serve static files from the "images" directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Enable CORS
app.use(cors());

// Parse text in request bodies
app.use(express.text());

app.post('/convert', (req, res) => {
    const lmlFilePath = path.join(__dirname, 'input.lml');
    console.log("Received LightML content. Preparing to save...");

    let lmlContent = req.body.replace(/\t/g, '');
    lmlContent = "LML version: " + currentVersion + "\n" + lmlContent
    console.log("Saving updated LightML content to input.lml...");

    fs.writeFile(lmlFilePath, lmlContent, 'utf-8', (err) => {
        if (err) {
            console.error("Error saving input.lml:", err);
            res.status(500).send('Failed to save LightML content.');
            return;
        }

        const htmlFilePath = path.join(__dirname, 'output.html');
        if (fs.existsSync(htmlFilePath)) {
            fs.unlinkSync(htmlFilePath);
            console.log('Deleted existing output.html file.');
        }

        const javaCommand = `java Main "${lmlFilePath}"`;
        exec(javaCommand, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing Java command: ${stderr}`);
                res.status(500).send('Conversion failed');
                return;
            }

            if (fs.existsSync(htmlFilePath)) {
                const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
                res.send(htmlContent);
            } else {
                res.status(500).send('Conversion output not found');
            }
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/index.html`);
});
