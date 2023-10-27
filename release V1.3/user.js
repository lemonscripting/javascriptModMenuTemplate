const codeSnippet = `
  fetch("https://pwcreatures.vercel.app/bin/auth.json")
  .then(response => response.json())
  .then(data => {
    if (data.auth === true) {
    } else {
      alert("Auth Error");
    }
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
  `;
const encoder = new TextEncoder();
const codeData = encoder.encode(codeSnippet);
crypto.subtle.digest("SHA-256", codeData)
    .then(hashBuffer => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        const hashCheck = hashHex;
        console.log('SHA-256 Hash:', hashCheck);
        //4c3ef37876a92ca314be24a9ae20aa0e1c277fd9dd93dcb6bfbf2ea7a55d5ffd
        if (hashHex != "4c3ef37876a92ca314be24a9ae20aa0e1c277fd9dd93dcb6bfbf2ea7a55d5ffd") {
            alert("Auth Error");
            //perform code to exit
        } else {
            alert("Status OK");
            //actions you want to perform after auth
            localStorage.setItem("AUTHSTATE", hashHex);
        }
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
//end of auth control

// Override console.log with an empty function
console.log = function () { alert("SOME TEXT") };

// Create the mod menu container

const verification = localStorage.getItem("AUTHSTATE");
if (verification === "4c3ef37876a92ca314be24a9ae20aa0e1c277fd9dd93dcb6bfbf2ea7a55d5ffd") {
    //contains the whole code
    const modMenu = document.createElement('div');

    modMenu.id = 'modMenu';
    modMenu.style.position = 'fixed';
    modMenu.style.top = '10px';
    modMenu.style.left = '10px';
    modMenu.style.width = '250px';
    modMenu.style.background = 'rgba(0, 0, 0, 0.8)';
    modMenu.style.border = '2px solid #444';
    modMenu.style.color = '#FFF';
    modMenu.style.zIndex = '999999999999'; // Set the z-index to a high value
    modMenu.style.borderRadius = '10px';
    modMenu.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    modMenu.style.display = 'block';

    // Create the mod menu header
    const header = document.createElement('div');
    header.style.background = '#333';
    header.style.textAlign = 'center';
    header.style.cursor = 'pointer';
    header.style.padding = '10px';
    header.style.fontWeight = 'bold';
    header.innerText = '@lemonscripting';
    header.style.borderTopLeftRadius = '10px';
    header.style.borderTopRightRadius = '10px';

    // Create the mod menu content
    const content = document.createElement('div');
    content.style.padding = '10px';

    // Function to toggle feature status
    function toggleFeature(button) {
        if (button.innerText.includes('[off]')) {
            button.innerText = button.innerText.replace('[off]', '[on]');
            //activate functions
            textCheck = button.innerText;
            //featur 1
            if (textCheck.includes("feature1")) {
                feature1();
            }
            //featur 2
            if (textCheck.includes("feature2")) {
                feature2();
            }
            //featur 3
            if (textCheck.includes("feature3")) {
                feature3();
            }
            //featur 4
            if (textCheck.includes("feature4")) {
                feature4();
            }
            //featur 5
            if (textCheck.includes("feature5")) {
                feature5();
            }
            //featur 6
            if (textCheck.includes("feature6")) {
                feature6();
            }
            //featur 7
            if (textCheck.includes("feature7")) {
                feature7();
            }
            //featur 8
            if (textCheck.includes("feature8")) {
                feature8();
            }
            button.style.background = '#00A1E1'; // Light blue when turned on
        } else {
            button.innerText = button.innerText.replace('[on]', '[off]');
            button.style.background = '#003366'; // Dark blue when turned off
        }
    }

    // Function to toggle the mod menu visibility
    function toggleModMenu() {
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    }

    // Feature data array
    const featureData = [
        { count: '1', name: 'Function 1' },
        { count: '2', name: 'Function 2' },
        { count: '3', name: 'Function 3' },
        { count: '4', name: 'Function 4' },
        { count: '5', name: 'Function 5' },
        { count: '6', name: 'Function 6' },
        { count: '7', name: 'Function 7' },
        { count: '8', name: 'Function 8' },
    ];

    // Create mod menu buttons using featureData
    featureData.forEach((feature) => {
        const button = document.createElement('button');
        button.className = 'imgui-button';
        button.innerText = `${feature.name} [off]`;
        button.style.background = '#003366'; // Dark blue by default
        button.onclick = () => toggleFeature(button);
        content.appendChild(button);
    });

    // Create the minimize button
    const minimizeButton = document.createElement('button');
    minimizeButton.style.display = 'block';
    minimizeButton.style.width = '100%';
    minimizeButton.style.padding = '10px';
    minimizeButton.style.background = '#333';
    minimizeButton.style.color = '#FFF';
    minimizeButton.style.border = 'none';
    minimizeButton.style.cursor = 'pointer';
    minimizeButton.innerText = 'Minimize / Expand';
    minimizeButton.onclick = toggleModMenu;

    // Create the first slider (Slider 1: Description of what this slider does)
    const slider1 = document.createElement('input');
    slider1.type = 'range';
    slider1.min = '1';
    slider1.max = '3';
    slider1.value = '1';
    slider1.className = 'slider';
    content.appendChild(slider1);

    // Add a label for the first slider
    const slider1Label = document.createElement('label');
    slider1Label.innerText = 'Slider 1: Description of what this slider does';
    content.appendChild(slider1Label);

    // Create the second slider (Slider 2: Description of what this slider does)
    const slider2 = document.createElement('input');
    slider2.type = 'range';
    slider2.min = '1';
    slider2.max = '3';
    slider2.value = '1';
    slider2.className = 'slider';
    content.appendChild(slider2);

    // Add a label for the second slider
    const slider2Label = document.createElement('label');
    slider2Label.innerText = 'Slider 2: Description of what this slider does';
    content.appendChild(slider2Label);

    // Append content to the mod menu
    modMenu.appendChild(header);
    modMenu.appendChild(content);
    modMenu.appendChild(minimizeButton);

    // Append the mod menu to the body
    document.body.appendChild(modMenu);

    // Style the ImGui-style button
    const style = document.createElement('style');
    style.innerHTML = `
.imgui-button {
  display: block;
  width: 100%;
  padding: 5px 0;
  border: none;
  color: white;
  text-align: left;
  background: '#003366'; /* Dark blue */
  cursor: pointer;
  transition: background 0.3s;
  border: none;
  border-bottom: 1px solid #444;
}
.imgui-button:hover {
  background: '#00A1E1'; /* Light blue on hover */
  border: none;
  border-bottom: 1px solid #444;
}

/* Style the sliders */
.slider {
  width: 100%;
  -webkit-appearance: none;
  height: 5px;
  background: #555;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background: #00A1E1; /* Light blue */
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 15px;
  height: 15px;
  background: #00A1E1; /* Light blue */
  cursor: pointer;
}
`;

    // Append the style to the body
    document.body.appendChild(style);

    // Define empty functions for the 8 features
    function feature1() {
        // Add functionality for feature 1
    }

    function feature2() {
        // Add functionality for feature 2
    }

    function feature3() {
        // Add functionality for feature 3
    }

    function feature4() {
        // Add functionality for feature 4
    }

    function feature5() {
        // Add functionality for feature 5
    }

    function feature6() {
        // Add functionality for feature 6
    }

    function feature7() {
        // Add functionality for feature 7
    }

    function feature8() {
        // Add functionality for feature 8
    }
}
