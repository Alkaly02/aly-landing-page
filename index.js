const toggleBtn = document.querySelector('#theme-toggle-btn');
const menu = document.querySelector('#menu');

console.log(toggleBtn);

toggleBtn.addEventListener('click', () => {
	menu.classList.toggle('activated');
	toggleBtn.classList.toggle('activated');
})