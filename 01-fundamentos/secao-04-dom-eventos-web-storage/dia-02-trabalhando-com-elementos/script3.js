const h1 = document.createElement('h1');
h1.innerText = 'TrybeTrip - Agência de Viagens'
document.body.appendChild(h1)

const mainContent = document.createElement('main');
mainContent.className = 'main-content'
document.body.appendChild(mainContent)

const centerContent = document.createElement('section');
centerContent.className = 'center-content'
mainContent.appendChild(centerContent)

const paragraph = document.createElement('p');
paragraph.innerText = 'Algum texto';
centerContent.appendChild(paragraph)

const leftContent = document.createElement('section');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent)

const rigthContent = document.createElement('section');
rigthContent.className = 'right-content'
mainContent.appendChild(rigthContent)

const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
leftContent.appendChild(img);

const ul = document.createElement('ul');
const numbers = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index = 0; index < numbers.length; index += 1) {
    const li = document.createElement('li');
    li.innerText = numbers[index];
    ul.appendChild(li);
}
rigthContent.appendChild(ul);

for (let index = 0; index < 3; index += 1) {
    const h3 = document.createElement('h3');
    h3.innerText = index;
    mainContent.appendChild(h3);
}
const title = document.querySelector('h1');
title.className = 'title';

const h3 = document.getElementsByTagName('h3');
for (let index =0; index < 3; index += 1) {
    h3[index].className = 'description';
}

const sectionLeftContent = doument.getElementsByClassName('left-content')[0];
mainContent.removeChild(sectionLeftContent);

const sectionRigthContent = document.getElementsByClassName('center-content')[0];
sectionRigthContent.style.marginRight = 'auto';

const sectionCenterContent = document.getElementsByClassName('center-content')[0];
sectionCenterContent.parentNode.style.backgroudColor = 'green';

ul.lastChild.remove();
ul.lastChild.remove();


