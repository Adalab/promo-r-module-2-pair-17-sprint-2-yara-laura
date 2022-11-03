'use strict';

//Evento click para carar guiñar ojo

//Elements
const face = document.querySelector('.js-face');
const head = document.querySelector('.js-head');

//Functions
function handleClick() {
  face.innerHTML = ';)';
  head.addEventListener('mouseover', () => {
    face.innerHTML = ':|';
  });
}

//Events
head.addEventListener('click', handleClick);
