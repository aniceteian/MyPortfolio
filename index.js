
const hamburger = document.querySelector('.hamburger');
    const links = document.querySelector('.links');

    hamburger.addEventListener('click', () => {
        links.classList.toggle('active');
    });

const toggleBtns = document.querySelectorAll('.toggleBtn');

toggleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const dropdown = btn.closest('.skill-section').querySelector('.skill-dropdown');
    dropdown.classList.toggle('open');
    btn.classList.toggle('rotate');
  });
});