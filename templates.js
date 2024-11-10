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

