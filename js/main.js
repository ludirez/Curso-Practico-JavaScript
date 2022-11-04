const menuEmailUser = document.querySelector('.navbar-email')
const showUserMenu = document.querySelector('.desktop-menu')

function toggleUserMenu(){
    showUserMenu.classList.toggle('inactive')
}

menuEmailUser.addEventListener('click', toggleUserMenu)