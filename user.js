// Override console.log with an empty function
console.log = function() {};

// Create the mod menu container
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
header.innerText = 'Mod Menu';
header.style.borderTopLeftRadius = '10px';
header.style.borderTopRightRadius = '10px';

// Create the mod menu content
const content = document.createElement('div');
content.style.padding = '10px';

// Function to toggle feature status
function toggleFeature(button) {
  if (button.innerText.includes('[off]')) {
    button.innerText = button.innerText.replace('[off]', '[on]');
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
  { count: '1', name: 'Aim' },
  { count: '2', name: 'Speed' },
  { count: '3', name: 'Health' },
  { count: '4', name: 'Damage' },
  { count: '5', name: 'Stealth' },
  { count: '6', name: 'Accuracy' },
  { count: '7', name: 'Visibility' },
  { count: '8', name: 'Inventory' },
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

// Create the first slider
const slider1 = document.createElement('input');
slider1.type = 'range';
slider1.min = '1';
slider1.max = '3';
slider1.value = '1';
slider1.className = 'slider';
content.appendChild(slider1);

// Create the second slider
const slider2 = document.createElement('input');
slider2.type = 'range';
slider2.min = '1';
slider2.max = '3';
slider2.value = '1';
slider2.className = 'slider';
content.appendChild(slider2);

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
