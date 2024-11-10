// Add bs nav
function addTemplateHome() {
    editor.setValue("");
    editor.clearHistory();
    editor.replaceRange("bootstrap\n"+
        "$name = My page name\n"+
        "$logo = images/logo.png\n"+
        "title = $name\n"+
        "// Navigation bar\n"+
        "bs-nav-dark{\n"+
        "\tlogo = $logo\n"+
        "\ttext = $name\n"+
        "\tlink = Home, #.html\n"+
        "\tlink = Gallery, #.html\n"+
        "\tlink = Contact Us, #.html\n"+
        "}\n", { line: 0, ch: 0 });}

// Add gallery
function addTemplateGallery() {
    editor.setValue("");
    editor.clearHistory();
    editor.replaceRange("bootstrap\n"+
        "$name = My page name\n"+
        "$logo = images/logo.png\n"+
        "title = $name\n"+
        "// Navigation bar\n"+
        "bs-nav-dark{\n"+
        "\tlogo = $logo\n"+
        "\ttext = $name\n"+
        "\tlink = Home, #.html\n"+
        "\tlink = Gallery, #.html\n"+
        "\tlink = Contact Us, #.html\n"+
        "}\n"+
        "// Header\n"+
        "br\n"+
        "h1(style='text-align: center;') = My Gallery\n"+
        "br\n"+
        "// Gallery\n"+
        "// Add images and text as necessary: image = source, text = description text, adjust size at end as necessary\n"+
        "bs-gallery-3x2{\n"+
        "\timage = images/1.png\n"+
        "\ttext = photo 1 description can go under images\n"+
        "\timage = images/1.png\n"+
        "\ttext = photo 2 description can go under images\n"+
        "\timage = images/1.png\n"+
        "\timage = images/1.png\n"+
        "\timage = images/1.png\n"+
        "\timage = images/1.png\n"+
        "}", { line: 0, ch: 0 });}

// Add Blog
function addTemplateBlog() {
    editor.setValue("");
    editor.clearHistory();
    editor.replaceRange("bootstrap\n" +
                    "$name = My Blog\n" +
                    "$logo = images/logo.png\n" +
                    "$style = style='text-align: center;'\n" +
                    "title = $name\n" +
                    "// Navigation bar\n" +
                    "bs-nav-dark{\n" +
                    "\tlogo = $logo\n" +
                    "\ttext = $name\n" +
                    "\tlink = Home, #.html\n" +
                    "\tlink = Gallery, #.html\n" +
                    "\tlink = Contact Us, #.html\n" +
                    "}\n" +
                    "// Header\n" +
                    "br\n" +
                    "br\n" +
                    "br\n" +
                    "div{\n" +
                    "h1($style) = My Blog Post\n" +
                    "p($style) = A subtitle for the post!\n" +
                    "br\n" +
                    "br\n" +
                    "br\n" +
                    "}\n" +
                    "img(width = 100%) = images/carousel/1.jpg\n" +
                    "br\n" +
                    "br\n" +
                    "br\n" +
                    "bs-row{\n" +
                    "\tbs-col{\n" +
                    "\t\th3 = Light ML\n" +
                    "\t}\n" +
                    "\tbs-col{\n" +
                    "\t\tp = Paul Craig\n" +
                    "\t}\n" +
                    "\tbs-col{\n" +
                    "\t\tp(style = \"color: blue;\") = 10/11/2024\n" +
                    "\t}\n" +
                    "}\n" +
                    "br\n" +
                    "p = Have you ever been writing out html and thought damn this is so boring and repetitive there needs to be a better way? Well I have and thats what made me create Light ML. What is Light ML I hear you ask? Well Let me explain. I have seen myself sitting for hours opening and closing html tag after html tag. I looked for ways to cut down on this and found multiple shortcuts. Hounorable mention to emmet abbreviations. I decided to challenge myself and created my own syntax that would break back into html\n" +
        "", { line: 0, ch: 0 });}