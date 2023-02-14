

const toggleBtn = document.querySelector('#toggle-btn');
const menu = document.querySelector('.menu-listm');


toggleBtn.addEventListener( 'click', (e) => {
    e.preventDefault()
    menu.classList.toggle('menu-active')
    console.log('click');
} )