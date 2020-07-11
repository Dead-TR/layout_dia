'use strict';

const contactForm = document.querySelector('.message__form');

function clean(evnt) {
  evnt.preventDefault();
  document.location.href = '/';
}

contactForm.addEventListener('submit', clean);
