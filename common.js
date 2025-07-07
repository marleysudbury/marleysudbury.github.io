// Home button function
function createHomeButton() {
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

// Contents box function
function createContentsBox() {
    // Check for presence of more than 1 h2 element
    const headings = document.querySelectorAll("h2", "h3", "h4");
    if (headings.length > 0) {
        // Array to track ids used
        const ids = new Array();
        // Create contents div and set id for CSS
        const contents = document.createElement("div");
        contents.setAttribute("id", "contents");
        // Add title to contents box
        const label = document.createElement("p");
        label.style.textAlign="center";
        label.style.fontWeight="bold";
        label.innerHTML = "Contents";
        contents.appendChild(label);
        const contentsList = document.createElement("ol");
        for (let i = 0; i < headings.length; i++) {
            if (headings[i].nodeName == "H2") {
                let headingId = headings[i].innerText;
                headingId = headingId.replace(/[^a-z0-9]/gi, '_').toLowerCase();
                let idNumber = 0;
                for (let j = 0; j < ids.length; j++) {
                    if (ids[j] === headingId) {
                        idNumber++;
                    }
                }
                if (idNumber === 0) {
                    idNumber = "";
                } else {
                    idNumber = "_"+idNumber;
                }
                ids.push(headingId);
                headings[i].setAttribute("id", headingId+idNumber);
                const a = document.createElement("a");
                a.setAttribute("href", "#"+headingId+idNumber);
                a.innerHTML = headings[i].innerText;
                const item = document.createElement("li");
                item.appendChild(a);
                contentsList.appendChild(item);
            }
        }
        contents.appendChild(contentsList);
        document.getElementById("bodywrap").insertBefore(contents, headings[0]);
    }
}

// This code puts the "Go home" button on every page except the home page
if (window.location.pathname != "/") {
    window.addEventListener("DOMContentLoaded", createHomeButton);
    window.addEventListener("DOMContentLoaded", createContentsBox);
}

// This code autogenerates contents boxes for articles
// Check that page is not home page
