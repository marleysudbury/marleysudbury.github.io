// This code puts the "Go home" button on every page except the home page
if (window.location.pathname != "/") {
    // <a href="../">
    // 	<div id="returnHome">Go home</div>
    // </a>
    // <a href="../">
    // 	<div id="returnHome2">Go home</div>
    // </a>

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
    // document.body.prependChild(textBox);

    // let node = document.createTextNode("Go home");
    // let linkButton = document.createElement("a");
    // linkButton.setAttribute("href", "'" + window.location.host + "'");
    // let linkButton2 = document.createElement("a");
    // linkButton2.setAttribute("href", "'" + window.location.host + "'");
    // let homeButton = document.createElement("div");
    // homeButton.setAttribute("id", "returnHome");
    // homeButton = homeButton.appendChild(node);
    // let homeButton2 = document.createElement("div");
    // homeButton2.setAttribute("id", "returnHome2");
    // homeButton2 = homeButton2.appendChild(node);
    // let toAdd = linkButton.appendChild(homeButton);
    // let toAdd2 = linkButton2.appendChild(homeButton2);

    // document.body.prepend(toAdd);
    // document.body.prepend(toAdd2);
}

// This code puts the "Last modified" footer onto a page

// let footer = document.createElement("footer");
// let date = new Date(document.lastModified);
// date = date.toISOString();
// let node = document.createTextNode("Last modified " + date.substr(0, date.indexOf('T')));
// footer.appendChild(node);
// // var body = document.getElementsByName("body");
// document.body.appendChild(footer);