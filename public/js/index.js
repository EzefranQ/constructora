

const toggleBtn = document.querySelector('#toggle-btn');
const menu = document.querySelector('.menu-listm');
const header = document.querySelector('.header');

toggleBtn.addEventListener( 'click', (e) => {
    e.preventDefault()
    menu.classList.toggle('menu-active')
    console.log('click');

    // if (header.classList.contains('header-nav')){
    //     header.classList.remove('header-nav')
    // } else {
    //     header.classList.add('header-nav')
    // }

} )