// Change Content Example
document.getElementById('change-content-btn').addEventListener('click', () => {
 const contentDiv = document.getElementById('content-div');
 contentDiv.textContent = 'Text updated with textContent.';
    contentDiv.innerHTML = '<p>Text updated with <strong>innerHTML</strong>.</p>';
  });
  
  // Modify Attributes Example
  document.getElementById('modify-attribute-btn').addEventListener('click', () => {
    const link = document.getElementById('example-link');
    link.setAttribute('href', 'https://example.com');
    link.textContent = 'Visit Example.com';
    setTimeout(() => link.removeAttribute('href'), 3000); // Remove href after 3 seconds
  });
  
  // Create Element Example
  document.getElementById('create-element-btn').addEventListener('click', () => {
    const dynamicDiv = document.getElementById('dynamic-div');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a newly created paragraph!';
    dynamicDiv.appendChild(newElement);
  });
  
  // Add and Remove Elements Example
  document.getElementById('add-remove-element-btn').addEventListener('click', () => {
    const dynamicDiv = document.getElementById('dynamic-div');
    const childElement = document.querySelector('#dynamic-div p');
    if (childElement) {
      dynamicDiv.removeChild(childElement);
    } else {
      const newElement = document.createElement('p');
      newElement.textContent = 'Added a paragraph. Click again to remove.';
      dynamicDiv.appendChild(newElement);
    }
  });
  
  // Style Element Example
  document.getElementById('style-element-btn').addEventListener('click', () => {
    const contentDiv = document.getElementById('content-div');
    contentDiv.style.color = 'blue';
    // contentDiv.classList.add('red');
    // setTimeout(() => contentDiv.classList.remove('red'), 3000); // Remove class after 3 seconds
  });
  