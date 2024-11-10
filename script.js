document.addEventListener('keydown', function(event) {
    // Check if Ctrl (or Command on Mac) and "S" are pressed together
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();  // Prevent the browser's default save action
        
        // Your custom save functionality
          // Example: Call your save function here
        
        console.log('Custom save triggered!');
    }
});
// Open file
document.getElementById('open-lml').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link
    document.getElementById('file-input').click(); // Programmatically click the hidden file input
});

// Handle file selection
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the selected file

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            // Handle the content of the file
            editor.setValue(content);
            console.log("File loaded successfully.");
        };
        reader.readAsText(file); // Read the file content as text
    }

    // Reset the file input value so it can be used again
    document.getElementById('file-input').value = '';
});

// Event listener for size
document.getElementById('screenSizeSwitch').addEventListener('change', function() {
    if (this.checked) {
        // 50% screen
        document.querySelector('.col-9').classList.replace('col-9', 'col-6');
        document.querySelector('.col-3').classList.replace('col-3', 'col-6');
        document.querySelector('label[for="screenSizeSwitch"]').textContent = '50% Screen';
    } else {
        // 25% screen (75%/25%)
        document.querySelector('.col-6').classList.replace('col-6', 'col-9');
        document.querySelector('.col-6').classList.replace('col-6', 'col-3');
        document.querySelector('label[for="screenSizeSwitch"]').textContent = '25% Screen';
    }
});
CodeMirror.defineSimpleMode('lightml', {
    start: [
        // Comments starting with // or #//
        { regex: /(?:\/\/|#\/\/).*/, token: 'comment' },
        // Parentheses and braces
        { regex: /[\{\}\(\)]/, token: 'bracket' },
        // Equal signs
        { regex: /=/, token: 'operator' },
        // Commas
        { regex: /,/, token: 'punctuation' },
        // Bold text inside **
        { regex: /\*\*(.*?)\*\*/, token: 'bold' },  // Match text inside **
        // Italics text inside ;;
        { regex: /\;\;(.*?)\;\;/, token: 'italics' },  // Match text inside ;;
        // Strings (including paths like .png, .css, etc.)
        { regex: /"(?:[^\\]|\\.)*?"|(?:[a-zA-Z0-9-_\/]+\.png|\.jpg|\.css|\.js|\.html|\.lml)/, token: 'string' },
        // Imports & Inputs
        { regex: /\b(?:bootstrap|css|js|tailwind|input-[a-zA-Z0-9-]+|search)\b/, token: 'imports' },
        // Parent tags
        { regex: /\b(?:list|form|footer|div|style|script|bs-[a-zA-Z0-9-]+|nav|nav-[a-zA-Z0-9-]+|gallery-\d+x\d+|ul)\b(?=\s*\{)/, token: 'parentTags' },
        // Keywords for LightML syntax
        { regex: /\b(?:text|html|label|title|link|image|images|body|bs-[a-zA-Z0-9-]+|button|button2|list|header|h1|h2|h3|h4|h5|h6|logo)\b(?=\s*(?:=|\())/, token: 'keyword' },
        // Variables (including ones with $)
        { regex: /\$\w+/, token: 'variable-2' },  // Variables starting with $
        // Identifiers (general)
        { regex: /\b[a-zA-Z_][a-zA-Z0-9_]*\b/, token: 'variable' },
    ],
    meta: {
        dontIndentStates: ['comment'],
        lineComment: '//',
    },
});

// Initialize CodeMirror editor with custom indentation rules
const editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
    mode: 'lightml', // Use the custom LightML mode
    theme: 'monokai', // Use the Monokai theme
    lineNumbers: true,
    tabSize: 4,     // Tab size
    lineWrapping: true,
    autofocus: true,
    matchBrackets: true,  // Match brackets and braces
    indentWithTabs: true
});
function changeTheme(theme) {
    editor.setOption('theme', theme);
}

// Handle custom behavior for the Enter key
editor.setOption('extraKeys', {
    'Enter': function(cm) {
        const cursor = cm.getCursor();
        const line = cm.getLine(cursor.line);

        // If the current line ends with an opening brace '{'
        if (line.trim().endsWith('{')) {
            cm.replaceSelection('\n\t'); // Insert new line and indent
            cm.setCursor(cursor.line + 1, cm.getLine(cursor.line + 1).length); // Move the cursor to the next line
        } else {
            cm.execCommand('newlineAndIndent'); // Default behavior for Enter key
        }
    }
});
// Handle automatic decrease of indentation when '}' is typed
editor.on('beforeChange', function(cm, change) {
    if (change.origin === '+input' && change.text[0] === '}') {
        cm.indentLine(change.from.line, 'subtract'); // Outdent the current line
    }
});
// Function to update the HTML preview after conversion
async function updatePreview() {
    const lmlContent = editor.getValue();
    lmlContent.replace("\t", ""); // Strip all tabs from code for conversion

    try {
        const response = await fetch('http://localhost:3000/convert', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: lmlContent
        });

        if (response.ok) {
            const htmlContent = await response.text();
            const iframeDoc = preview.contentDocument || preview.contentWindow.document;
            iframeDoc.open();
            iframeDoc.write(htmlContent);
            iframeDoc.close();

            // Apply settings (you can call these conditionally)
            applyWhiteBackground(iframeDoc); // Call this if the white background setting is enabled
            applyZeroMargin(iframeDoc);      // Call this if the margin setting is enabled
        } else {
            console.error('Failed to convert LML:', response.status);
        }
    } catch (error) {
        console.error('Error connecting to server:', error);
    }
}

// Get the preview iframe element
const preview = document.getElementById('preview');
// Add event listener to the editor to trigger updates
let debounceTimer;
editor.on('change', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        updatePreview();
    }, 1500);
});
// Initial preview update
updatePreview();
// Placeholder text
var placeholderText = "Enter LML here...";

// Function to create and manage the placeholder
function createPlaceholder() {
    // Create a div element for the placeholder
    var placeholder = document.createElement('div');
    placeholder.className = 'CodeMirror-placeholder';
    placeholder.textContent = placeholderText;

    // Add the placeholder inside the CodeMirror editor
    editor.getWrapperElement().appendChild(placeholder);

    // Update the placeholder visibility based on editor content
    function updatePlaceholder() {
        if (editor.getValue() === '') {
            placeholder.style.display = 'block'; // Show placeholder if editor is empty
        } else {
            placeholder.style.display = 'none';  // Hide placeholder if editor has content
        }
    }

    // Event listeners to update placeholder on change, focus, and blur
    editor.on('change', updatePlaceholder);
    editor.on('focus', updatePlaceholder);
    editor.on('blur', updatePlaceholder);

    // Initialize placeholder visibility
    updatePlaceholder();
}

// Call the function to create and manage the placeholder
createPlaceholder();
