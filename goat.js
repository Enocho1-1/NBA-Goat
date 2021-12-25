

const imageTwoDiv = document.querySelector('ul.img2');
const imageThreeDiv = document.querySelector('.img3');
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const overlayTwo = document.getElementById('overlay2');


imageTwoDiv.addEventListener('mouseover', (e) => {
  if(e.target.tagName == 'LI'){
    e.target.style.opacity = '0.50';
  }
});

imageTwoDiv.addEventListener('mouseout', (e) => {
  if(e.target.tagName == 'LI'){
    e.target.style.opacity = '100';
  }
});

imageThreeDiv.addEventListener('mouseover', (e) => {
  if(e.target.className == 'buttonStyle'){
    e.target.style.backgroundColor = 'blue';
    e.target.style.color = 'white';
  }
});

imageThreeDiv.addEventListener('mouseout', (e) => {
  if(e.target.className == 'buttonStyle'){
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'black';
  }
});

openModalButtons.forEach( button =>{
  button.addEventListener('click', () => {
    const modal= document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
});

closeModalButtons.forEach( button =>{
  button.addEventListener('click', () => {
    const modal= button.closest('.modal');
    closeModal(modal)
  })
});

function openModal(modal) {
  if(modal == null) return
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if(modal == null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
