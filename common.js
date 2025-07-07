// Home button function
function createHomeButton() {
    // This code puts the "Go home" button on every page

    // The reason that everything is duplicated is that one instance is used to
    // push the content on the page down by the correct amount whilst the other
    // sticks to the top of the page for easy access when scrolling.

    // There is probably a more elegant solution.

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
    // This code autogenerates contents boxes for articles

    // Check for presence of more than 1 h2 element
    const headings = document.querySelectorAll("h2, h3, h4");
    if (headings.length > 0) {
        // Array to track ids used
        const ids = new Array();

        // Int to track list level
        let listLevel = 0;

        // Create contents div and set id for CSS
        const contents = document.createElement("div");
        contents.setAttribute("id", "contents");

        // Add title to contents box
        const label = document.createElement("p");
        label.style.textAlign="center";
        label.style.fontWeight="bold";
        label.innerHTML = "Contents";
        contents.appendChild(label);

        // Array for any sublists which need to be created
        const subLists = new Array();

        // Create contents list
        const contentsList = document.createElement("ol");

        subLists.push(contentsList);

        // Loop through headings and add them to list
        for (let i = 0; i < headings.length; i++) {
            let newLevel = 0;
            if (headings[i].nodeName == "H2") {
                newLevel = 0;
            } else if (headings[i].nodeName == "H3") {
                newLevel = 1;
            } else if (headings[i].nodeName == "H4") {
                newLevel = 2;
            }
            
            // End sublists if present
            while (listLevel > newLevel) {
                subLists[subLists.length-2].lastChild.appendChild(subLists.pop());
                listLevel--;
            }
            // Create sublists if required
            while (listLevel < newLevel) {
                const newSubList = document.createElement("ol");
                subLists.push(newSubList);
                listLevel++;
            }

            // Create the id for the header so it can be hyperlinked
            let headingId = headings[i].innerText;
            
            // The id is the text of the header in lowercase with symbols
            // replaced by underscores
            headingId = headingId.replace(/[^a-z0-9]/gi, '_').toLowerCase();

            // If the same text is used for multiple headers, add sequential
            // numbering to differentiate
            let idNumber = 0;
            for (let j = 0; j < ids.length; j++) {
                if (ids[j] === headingId) {
                    idNumber++;
                }
            }

            // If header text is unique append nothing
            if (idNumber === 0) {
                idNumber = "";
            } else {
                idNumber = "_"+idNumber;
            }

            ids.push(headingId);
            headings[i].setAttribute("id", headingId+idNumber);

            // Create hyperlink
            const a = document.createElement("a");
            a.setAttribute("href", "#"+headingId+idNumber);
            a.innerHTML = headings[i].innerText;
            const item = document.createElement("li");
            item.appendChild(a);

            // Add item to list
            //contentsList.appendChild(item);
            subLists[subLists.length-1].appendChild(item);
        }
        while (listLevel > 0) {
            subLists[subLists.length-2].appendChild(subLists.pop());
            listLevel--;
        }
        // Add list to contents box
        contents.appendChild(contentsList);
        
        // Insert contents box before first h2 element
        document.getElementById("bodywrap").insertBefore(contents, headings[0]);
    }
}

// Check that page is not home page
if (window.location.pathname != "/") {
    // Once the DOM content is loaded, run the constructor functions
    window.addEventListener("DOMContentLoaded", createHomeButton);
    window.addEventListener("DOMContentLoaded", createContentsBox);
}

