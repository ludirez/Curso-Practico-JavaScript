const emailMenuUser = document.querySelector('.navbar-email')
const toggleMenuUser = document.querySelector('.desktop-menu')

const dropdownMobileMenu = document.querySelector('.menu')
const toggleDropdownMobileMenu = document.querySelector('.mobile-menu')

const shoppingCartDropdown = document.querySelector('.navbar-shopping-cart')
const toggleShoppingCartDropdown = document.querySelector('.product-detail')

const cardsContainers = document.querySelector('.cards-container')

const productoDetailContainer = document.querySelector('.product-more-detail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')


//convirtiendo una array de tipo nodeList a un array normal 
const closedEvent = document.querySelectorAll('.inactive')//nodeList

const arrClosedEvent = [].slice.call(closedEvent)//array
    // for (let value = 0; value < arrClosedEvent.length; value++) {
    //     const elements = arrClosedEvent[value];}

// const aryInactiveElements = []
// aryInactiveElements.push(closedEvent)

    // for (let value = 0; value < arrClosedEvent.length; value++) {
    //     const element = arrClosedEvent[value];
    //         if (!element.classList.contains('inactive')) {
    //             element.classList.add('inactive')
    //             arrClosedEvent.splice(1, 1) //indice, numero de elementos a eliminar, elemento a añadir 
    //             console.log('no contiene')
    //         } else {
    //             console.log('contiene')
    //         }}

function toggleUserMenu(){//método 1. forzando ocultar las otras 2

  var isSomeOpen = toggleShoppingCartDropdown.classList.contains('inactive')
      if (!isSomeOpen) {
        toggleShoppingCartDropdown.classList.add('inactive')}

  var isSomeOpen = productoDetailContainer.classList.contains('inactive')
      if (!isSomeOpen) {
        productoDetailContainer.classList.add('inactive')}

  toggleMenuUser.classList.toggle('inactive')
}

function toggleMobileMenu() {

  var isSomeOpen = toggleShoppingCartDropdown.classList.contains('inactive')
      if (!isSomeOpen) {
        toggleShoppingCartDropdown.classList.add('inactive')}

  var isSomeOpen = productoDetailContainer.classList.contains('inactive')
      if (!isSomeOpen) {
        productoDetailContainer.classList.add('inactive')}

  toggleDropdownMobileMenu.classList.toggle('inactive')
}

function toggleShoppingCartMenu() {

  var isSomeOpen = toggleMenuUser.classList.contains('inactive')
      if (!isSomeOpen) {
        toggleMenuUser.classList.add('inactive')}

  var isSomeOpen = toggleDropdownMobileMenu.classList.contains('inactive')
      if (!isSomeOpen) {
        toggleDropdownMobileMenu.classList.add('inactive')}

  var isSomeOpen = productoDetailContainer.classList.contains('inactive')
      if (!isSomeOpen) {
        productoDetailContainer.classList.add('inactive')}

  toggleShoppingCartDropdown.classList.toggle('inactive')
  }

//--------------------
  function openProductDetailAside(){
    productoDetailContainer.classList.remove('inactive')
  }

  function closedProductDetailAside(){
    productoDetailContainer.classList.add('inactive')
  }

emailMenuUser.addEventListener('click', toggleUserMenu)
dropdownMobileMenu.addEventListener('click', toggleMobileMenu)
shoppingCartDropdown.addEventListener('click', toggleShoppingCartMenu)
productDetailCloseIcon.addEventListener('click', closedProductDetailAside)

//Creando Product List

const productList = []
productList.push({
  productName: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  textAlt: 'Imagen de producto',
})
productList.push({
  productName: 'House',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  textAlt: 'Imagen de producto',
})
productList.push({
  productName: 'Car',
  price: 120,
  image: '',
  textAlt: 'Imagen de producto',
})

function renderProducts(arr) {
  for (product of arr){
    const productoCard = document.createElement('div')
    productoCard.classList.add('product-card')
    
        const productImg = document.createElement('img') //product = {name, price, image} -> product.image
          productImg.setAttribute('src', product.image)
          productImg.setAttribute('alt', product.textAlt)
          productImg.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement('div')
              productInfo.classList.add('product-info')
        
            const productDivInfo = document.createElement('div')
                const priceInfo = document.createElement('p')
                      priceInfo.innerText = '$' + product.price
                const titleInfo = document.createElement('p')
                      titleInfo.innerText = product.productName
            productDivInfo.append(priceInfo, titleInfo)

            const productFigure = document.createElement('figure')
                const imgFigure = document.createElement('img')
                      imgFigure.setAttribute('src', './img/icons/bt_add_to_cart.svg')
                      imgFigure.setAttribute('alt', 'icono')
            productFigure.append(imgFigure)
                      
        productInfo.append(productDivInfo, productFigure)

    productoCard.append(productImg, productInfo)
cardsContainers.appendChild(productoCard)
}
}

renderProducts(productList)

