const menuEmailUser = document.querySelector('.navbar-email')
const showUserMenu = document.querySelector('.desktop-menu')
const listenerBurgerMenu = document.querySelector('.menu')
const burgerMenu = document.querySelector('.mobile-menu')

function toggleBurgerMenu() {
    burgerMenu.classList.toggle('inactive')
}
function toggleUserMenu(){
    showUserMenu.classList.toggle('inactive')
}

menuEmailUser.addEventListener('click', toggleUserMenu)
listenerBurgerMenu.addEventListener('click', toggleBurgerMenu)