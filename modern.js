// Create the menu elements
const menu = document.createElement('div');
menu.id = 'menu';
menu.className = 'menu';
menu.style.position = 'fixed';
menu.style.top = '50px';
menu.style.left = '50px';
menu.style.width = '200px';
menu.style.backgroundColor = '#222';
menu.style.color = 'white';
menu.style.border = '2px solid #555';
menu.style.borderRadius = '10px';
menu.style.overflow = 'auto'; // Add scrollbar to the menu

const menuHeader = document.createElement('div');
menuHeader.className = 'menu-header';
menuHeader.style.padding = '10px';
menuHeader.style.backgroundColor = '#333';
menuHeader.style.borderBottom = '2px solid #555';
menuHeader.style.borderRadius = '8px 8px 0 0';
menuHeader.style.cursor = 'move';

const headerText = document.createElement('h2');
headerText.textContent = 'CS:GO Mod Menu';
headerText.style.margin = '0';

const closeBtn = document.createElement('span');
closeBtn.id = 'closeBtn';
closeBtn.textContent = 'X';
closeBtn.style.position = 'absolute';
closeBtn.style.top = '5px';
closeBtn.style.right = '10px';
closeBtn.style.cursor = 'pointer';

const menuBody = document.createElement('div');
menuBody.className = 'menu-body';
menuBody.style.padding = '10px';

// Create elements for scrollbar
const scrollbarLabel = document.createElement('label');
scrollbarLabel.textContent = 'Scrollbar Value:';
scrollbarLabel.style.display = 'block';

const scrollbar = document.createElement('input');
scrollbar.type = 'range';
scrollbar.min = '1';
scrollbar.max = '100';
scrollbar.value = '50';
scrollbar.style.width = '100%';
scrollbar.style.marginBottom = '10px';

// Create checkboxes
const checkbox1 = createCheckbox('Wallhack');
const checkbox2 = createCheckbox('Aimbot');
const checkbox3 = createCheckbox('ESP');

// Create dropdown menu
const dropdownLabel = document.createElement('label');
dropdownLabel.textContent = 'Select Weapon:';
dropdownLabel.style.display = 'block';

const dropdown = document.createElement('select');
dropdown.style.width = '100%';
dropdown.style.marginBottom = '10px';
dropdown.style.padding = '5px';
dropdown.style.border = '1px solid #555';
dropdown.style.borderRadius = '5px';
dropdown.style.backgroundColor = '#333';
dropdown.style.color = 'white';

const weapons = ['AK-47', 'M4A4', 'AWP', 'Deagle', 'Glock-18'];
weapons.forEach(weapon => {
  const option = document.createElement('option');
  option.textContent = weapon;
  dropdown.appendChild(option);
});

// Append elements to the menu
menuHeader.appendChild(headerText);
menuHeader.appendChild(closeBtn);
menu.appendChild(menuHeader);
menu.appendChild(menuBody);
menuBody.appendChild(scrollbarLabel);
menuBody.appendChild(scrollbar);
menuBody.appendChild(checkbox1);
menuBody.appendChild(checkbox2);
menuBody.appendChild(checkbox3);
menuBody.appendChild(dropdownLabel);
menuBody.appendChild(dropdown);
document.body.appendChild(menu);

// Make the menu draggable
let isDragging = false;
let offsetX, offsetY;

menuHeader.addEventListener('mousedown', startDrag);
document.addEventListener('mouseup', endDrag);

function startDrag(e) {
  isDragging = true;
  offsetX = e.clientX - menu.getBoundingClientRect().left;
  offsetY = e.clientY - menu.getBoundingClientRect().top;
}

function endDrag() {
  isDragging = false;
}

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;
    menu.style.left = newX + 'px';
    menu.style.top = newY + 'px';
  }
});

// Close the menu when close button is clicked
closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
});

// Function to create checkbox
function createCheckbox(labelText) {
  const checkboxContainer = document.createElement('label');
  checkboxContainer.style.display = 'flex';
  checkboxContainer.style.alignItems = 'center';
  checkboxContainer.style.padding = '5px';

  const textSpan = document.createElement('span');
  textSpan.textContent = labelText;
  textSpan.style.flex = '1';
  textSpan.style.textAlign = 'left'; // Align text left

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.marginLeft = '5px'; // Adjust checkbox alignment

  checkboxContainer.appendChild(textSpan);
  checkboxContainer.appendChild(checkbox);

  return checkboxContainer;
}
