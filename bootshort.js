// insert Bootstrap
function addBootstrap() {
    editor.replaceRange("bootstrap\n", { line: 0, ch: 0 });
}

// Add bs gallery
function insertBsGallery() {
    editor.replaceRange("// Add images and text as necessary: image = source, text = description text\nbs-gallery-3x3{\n\timage = images/1.png\n\ttext = photo 1 description can go under images\n\timage = images/1.png\n\ttext = photo 2 description can go under images\n\timage = images/1.png\n\timage = images/1.png\n\timage = images/1.png\n\timage = images/1.png\n}\n", editor.getCursor());
}

// Add bs dark gallery
function insertBsDarkGallery() {
    editor.replaceRange("// Add images and text as necessary: image = source, text = description text\nbs-gallery-dark-3x3{\n\timage = images/1.png\n\ttext = photo 1 description can go under images\n\timage = images/1.png\n\ttext = photo 2 description can go under images\n\timage = images/1.png\n\timage = images/1.png\n\timage = images/1.png\n\timage = images/1.png\n}\n", editor.getCursor());
}

// Add bs carousel
function insertBsCarousel(){
    editor.replaceRange("bs-carousel{\n"+
        "\timage = images/carousel/1.jpg\n"+
        "\ttitle = This title\n"+
        "\ttext = this is the subtext\n"+
        "\timage = images/carousel/2.jpg\n"+
        "\ttitle = This title\n"+
        "\ttext = this is the subtext\n"+
        "}\n", editor.getCursor());
}

// Add bs nav
function insertBsNav() {
    editor.replaceRange("bs-nav-light{\n" +
                        "\tlogo = images/logo.png\n" +
                        "\ttext = My Page Name\n" +
                        "\tlink = Home,#.html\n " +
                        "\tlink = About us,#.html\n" +
                        "}\n", editor.getCursor());
}

// Add bs hero
function insertBsHero() {
    editor.replaceRange("bs-hero{\n" +
                                "\tlogo = images/logo.png\n" +
                                "\theader = Hero Section Header\n" +
                                "\ttext = Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem dicta, maxime ad molestiae labore ipsa illo dolore iure ipsam obcaecati debitis mollitia! Magni vel dicta distinctio aliquid quasi vero quae.\n" +
                                "\tbutton = Button 1\n" +
                                "\tlink = home.html\n" +
                                "\tbutton2 = Button 2\n" +
                                "\tlink = link2\n" +
                                "}\n", editor.getCursor())
}
// Add bs row
function insertBsRow() {
    editor.replaceRange("bs-row{\n\t\n}\n", editor.getCursor());
}

function insertBsCol() {
    editor.replaceRange("bs-col{\n\t\n}\n", editor.getCursor());
}
// Add bs div
function insertBsDiv() {
    editor.replaceRange("bs-div{\n\t\n}\n", editor.getCursor());
}

function insertBsDivCenter() {
    editor.replaceRange("bs-div-center{\n\t\n}\n", editor.getCursor());
}

function insertBsDivHeadText(){
    editor.replaceRange("bs-div{\n"+
                        "\theader = My Webpage\n"+
                        "\ttext = your content goes in here.\n"+
                        "}\n", editor.getCursor());
}

// Add bs nav
function insertBsDarkNav() {
    editor.replaceRange("bs-nav-dark{\n" +
        "\tlogo = images/logo.png\n" +
        "\ttext = My Page Name\n" +
        "\tlink = Home,#.html\n " +
        "\tlink = About us,#.html\n" +
        "}\n", editor.getCursor());
}

// Add bs button
function insertBsButtonSuccess() {
    editor.replaceRange("bs-button-success = Button Text Here\n", editor.getCursor());
}

function insertBsButtonPrimary() {
    editor.replaceRange("bs-button-primary = Button Text Here\n", editor.getCursor());
}

function insertBsButtonSecondary() {
    editor.replaceRange("bs-button-secondary = Button Text Here\n", editor.getCursor());
}

function insertBsButtonDanger() {
    editor.replaceRange("bs-button-danger = Button Text Here\n", editor.getCursor());
}

function insertBsButtonWarning() {
    editor.replaceRange("bs-button-warning = Button Text Here\n", editor.getCursor());
}

function insertBsButtonLight() {
    editor.replaceRange("bs-button-light = Button Text Here\n", editor.getCursor());
}

function insertBsButtonDark() {
    editor.replaceRange("bs-button-dark = Button Text Here\n", editor.getCursor());
}

function insertBsButtonLink() {
    editor.replaceRange("bs-button-link = Button Text Here\n", editor.getCursor());
}

// Add bs alert
function insertBsAlertSuccess() {
    editor.replaceRange("bs-alert-success = Alert Text Here\n", editor.getCursor());
}

function insertBsAlertPrimary() {
    editor.replaceRange("bs-alert-primary = Alert Text Here\n", editor.getCursor());
}

function insertBsAlertSecondary() {
    editor.replaceRange("bs-alert-secondary = Alert Text Here\n", editor.getCursor());
}

function insertBsAlertDanger() {
    editor.replaceRange("bs-alert-danger = Alert Text Here\n", editor.getCursor());
}

function insertBsAlertWarning() {
    editor.replaceRange("bs-alert-warning = Alert Text Here\n", editor.getCursor());
}

function insertBsAlertLight() {
    editor.replaceRange("bs-alert-light = Alert Text Here\n", editor.getCursor());
}

function insertBsAlertDark() {
    editor.replaceRange("bs-alert-dark = Alert Text Here\n", editor.getCursor());
}

function insertBsAlertLink() {
    editor.replaceRange("bs-alert-link = Alert Text Here\n", editor.getCursor());
}
