function changeText() {
  const textElement = document.getElementById('dynamicText');
  textElement.textContent = 'JAVA SCRIPT IS AMAZING!';
}

function toggleHighlight() {
  const textElement = document.getElementById('dynamicText');
  textElement.classList.toggle('highlight');
}

function addOrRemove() {
  const container = document.getElementById('container');
  const existingParagraph = document.getElementById('dynamicParagraph');

  if (existingParagraph) {
    container.removeChild(existingParagraph);
  } else {
    const newParagraph = document.createElement('p');
    newParagraph.id = 'dynamicParagraph';
    newParagraph.textContent = 'I think JavaScript is interesting and I would like to learn more!';
    container.appendChild(newParagraph);
  }
}

