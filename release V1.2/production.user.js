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
        if (hashHex != "4c3ef37876a92ca314be24a9ae20aa0e1c277fd9dd93dcb6bfbf2ea7a55d5ffd") {
            alert("Auth Error");
        } else {
            alert("Status OK");
            localStorage.setItem("AUTHSTATE", hashHex);
        }
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
const verification = localStorage.getItem("AUTHSTATE");
if (verification === "4c3ef37876a92ca314be24a9ae20aa0e1c277fd9dd93dcb6bfbf2ea7a55d5ffd") {
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
    const header = document.createElement('div');
    header.style.background = '#333';
    header.style.textAlign = 'center';
    header.style.cursor = 'pointer';
    header.style.padding = '10px';
    header.style.fontWeight = 'bold';
    header.innerText = '@lemonscripting';
    header.style.borderTopLeftRadius = '10px';
    header.style.borderTopRightRadius = '10px';
    const content = document.createElement('div');
    content.style.padding = '10px';
    function toggleFeature(button) {
        if (button.innerText.includes('[off]')) {
            button.innerText = button.innerText.replace('[off]', '[on]');
            button.style.background = '#00A1E1';
        } else {
            button.innerText = button.innerText.replace('[on]', '[off]');
            button.style.background = '#003366';
        }
    }
    function toggleModMenu() {
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    }
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
    featureData.forEach((feature) => {
        const button = document.createElement('button');
        button.className = 'imgui-button';
        button.innerText = `${feature.name} [off]`;
        button.style.background = '#003366';
        button.onclick = () => toggleFeature(button);
        content.appendChild(button);
    });
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
    const slider1 = document.createElement('input');
    slider1.type = 'range';
    slider1.min = '1';
    slider1.max = '3';
    slider1.value = '1';
    slider1.className = 'slider';
    content.appendChild(slider1);
    const slider1Label = document.createElement('label');
    slider1Label.innerText = 'Slider 1: Description of what this slider does';
    content.appendChild(slider1Label);
    const slider2 = document.createElement('input');
    slider2.type = 'range';
    slider2.min = '1';
    slider2.max = '3';
    slider2.value = '1';
    slider2.className = 'slider';
    content.appendChild(slider2);
    const slider2Label = document.createElement('label');
    slider2Label.innerText = 'Slider 2: Description of what this slider does';
    content.appendChild(slider2Label);
    modMenu.appendChild(header);
    modMenu.appendChild(content);
    modMenu.appendChild(minimizeButton);
    document.body.appendChild(modMenu);
    const style = document.createElement('style');
    style.innerHTML = `
.imgui-button {
  display: block;
  width: 100%;
  padding: 5px 0;
  border: none;
  color: white;
  text-align: left;
  background: '#003366';
  cursor: pointer;
  transition: background 0.3s;
  border: none;
  border-bottom: 1px solid #444;
}
.imgui-button:hover {
  background: '#00A1E1';
  border: none;
  border-bottom: 1px solid #444;
}
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
  background: #00A1E1; 
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 15px;
  height: 15px;
  background: #00A1E1;
  cursor: pointer;
}
`;
    document.body.appendChild(style);
    function feature1() {
    }
    function feature2() {
    }
    function feature3() {
    }
    function feature4() {
    }
    function feature5() {
    }
    function feature6() {
    }
    function feature7() {
    }
    function feature8() {
    }
}
