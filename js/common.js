const mainMenu = document.querySelector('.main-menu');
const logo = document.querySelector('.main-nav1 ul img[alt="인디펍"]')

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        mainMenu.classList.add('fixed');
    } else {
        mainMenu.classList.remove('fixed');
    }
});