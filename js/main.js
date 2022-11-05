const emailMenuUser = document.querySelector('.navbar-email')
const toggleMenuUser = document.querySelector('.desktop-menu')

const dropdownMobileMenu = document.querySelector('.menu')
const toggleDropdownMobileMenu = document.querySelector('.mobile-menu')

const shoppingCartDropdown = document.querySelector('.navbar-shopping-cart')
const toggleShoppingCartDropdown = document.querySelector('.product-detail')

const aryInactiveElements = []

function toggleUserMenu(){//método 1. forzando ocultar las otras 2
    toggleDropdownMobileMenu.classList.add('inactive')
    toggleShoppingCartDropdown.classList.add('inactive')
    toggleMenuUser.classList.toggle('inactive')
}

function toggleMobileMenu() {
    toggleMenuUser.classList.add('inactive')
    toggleShoppingCartDropdown.classList.add('inactive')
    toggleDropdownMobileMenu.classList.toggle('inactive')
}

function toggleShoppingCartMenu() {
    toggleMenuUser.classList.add('inactive')
    toggleDropdownMobileMenu.classList.add('inactive')
    toggleShoppingCartDropdown.classList.toggle('inactive')
}


emailMenuUser.addEventListener('click', toggleUserMenu)
dropdownMobileMenu.addEventListener('click', toggleMobileMenu)
shoppingCartDropdown.addEventListener('click', toggleShoppingCartMenu)

