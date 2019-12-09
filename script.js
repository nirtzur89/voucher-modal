//modal element
const modal = document.getElementById('modalElement');
//modal button
const modalBtn = document.getElementById('modalBtn');
//close button
const closeBtn = document.getElementById('closeBtn');

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);
