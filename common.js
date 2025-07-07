// This code puts the "Go home" button on every page except the home page
if (window.location.pathname != "/") {
    let node = document.createTextNode("Go home");
    let node2 = document.createTextNode("Go home");
    let anchor = document.createElement("a");
    let anchor2 = document.createElement("a");
    let box = document.createElement("div");
    let box2 = document.createElement("div");
    box.setAttribute("id", "returnHome");
    box2.setAttribute("id", "returnHome2");
    anchor.setAttribute("href", window.location.origin);
    anchor2.setAttribute("href", window.location.origin);
    box.appendChild(node);
    box2.appendChild(node2);
    anchor2.appendChild(box2);
    anchor.appendChild(box);
    document.body.prepend(anchor2);
    document.body.prepend(anchor);
}

// This code autogenerates contents boxes for articles
// Check that page is not home page
if (window.location.pathname != "/") {
    // Check for presence of more than 1 h2 element
    const headings = document.querySelectorAll("h2", "h3", "h4");
    // Create contents div and set id for CSS
    const contents = document.createElement("div");
    contents.setAttribute("id", "contents");
    const contentsList = document.createElement("ol");
}
