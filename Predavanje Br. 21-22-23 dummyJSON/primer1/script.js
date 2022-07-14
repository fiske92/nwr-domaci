/**
 * =================================
 * *           VARIABLES
 * =================================
 */

const API_URL = 'https://dummyjson.com'
const allProductsElement = document.getElementById('all-products')
const productPopupElement = document.getElementById('product-popup')
const closePopupButton = document.getElementById('close-popup')
const categoryContainer = document.getElementById('categoryContainer')
const singleProductInfo = document.getElementById('singleProductInfo')
let cartIco = document.getElementById('cartIcon')

let cartItems = []
let cartItemsLocal = JSON.parse(localStorage.getItem('cart'))
    cartItemsLocal?.forEach(data =>{
        cartItems.push(data)
        cartIco.innerText = cartItems.length
    })
    if (cartItems.length == 0) {
        cartIco.innerText = 0
    }

/**
 * =================================
 * *        PAGINATION
 * =================================
 */

const btnPrev = document.getElementById('arrow-prev')
const btnNext = document.getElementById('arrow-next')
let skipNumber = 0
let totalProducts;

btnNext.addEventListener('click', ()=>{
    skipNumber = skipNumber + 8

    if (skipNumber >= 100) {
        skipNumber = skipNumber - 8
        return
    }

    allProductsElement.innerText = ''
    getAllProducts()
})
btnPrev.addEventListener('click', ()=>{
    if (skipNumber <= 0) {
        skipNumber = 0
        return
    }
    skipNumber = skipNumber - 8
    allProductsElement.innerText = ''
    getAllProducts()
})

/**
 * =================================
 * *      MAIN FUNCTIONALITY
 * =================================
 */

 getAllProducts()
 
 getAllCategories()


/**
 * =================================
 * *        HELPER FUNCTIONS
 * =================================
 */

// Get all products from API
function getAllProducts(){
    fetch(`${API_URL}/products?limit=8&skip=${skipNumber}`)
        .then(response => response.json())
        .then(data =>{
            totalProducts = data.products
            data.products.forEach(singleProduct => {
                createProductCard(singleProduct)
            });
        })
}

function createProductCard(product){
    // Product card 
    const productCard = document.createElement('div')
    productCard.classList = 'p-4 border flex flex-col items-center h-[280px] bg-white relative'

    // Product image
    const img = document.createElement('img')
    img.setAttribute('src', product.thumbnail)
    img.classList = 'h-[120px]'

    // Product title
    const title = document.createElement('h2')
    title.innerText = product.title
    title.classList = 'mt-3 font-medium text-center'

    // Product price
    const price = document.createElement('h3')
    price.innerText = `$${product.price}`
    price.classList = 'bg-slate-700 text-lg text-white px-2 font-medium absolute top-0'

    // View more button
    const btn = document.createElement('button')
    btn.innerText = 'View more'
    btn.classList = 'bg-sky-100 hover:bg-sky-500 transition-all text-sky-500 hover:text-white px-2 py-2 w-full text-center absolute bottom-0 cursor-pointer'
    btn.setAttribute('data-productid', product.id)
    btn.addEventListener('click', (event)=>{
        console.log(event.target.getAttribute('data-productid'))
        togglePopup()
        getSingleProduct(event.target.getAttribute('data-productid'))
    })

    //Add to cart button
    const btnAddToCart = document.createElement('button')
    btnAddToCart.setAttribute('data-productid', product.id)
    btnAddToCart.innerText = 'Add to cart'
    btnAddToCart.classList = 'border px-2 py-0.5 bg-slate-600 text-white mt-2 hover:bg-slate-900 transition'
    btnAddToCart.addEventListener('click', ()=>{
        cartItems.push(event.target.getAttribute('data-productid'))
        localStorage.setItem('cart', JSON.stringify(cartItems))
        cartIco.innerText = cartItems.length
    })
    // Append info to product card
    productCard.appendChild(img)
    productCard.appendChild(title)
    productCard.appendChild(price)
    productCard.appendChild(btn)
    productCard.appendChild(btnAddToCart)

    // Append product card to all products container
    allProductsElement.appendChild(productCard)

}

function togglePopup(){
    productPopupElement.classList.toggle('hidden')
}

/**
 * =================================
 * *        EVENT LISTENERS
 * =================================
 */

closePopupButton.addEventListener('click', ()=>{
    singleProductInfo.innerText = ''
    togglePopup()
})


// =======================================================


function getAllCategories(){
    fetch(`${API_URL}/products/categories`)
    .then(response => response.json())
    .then(data =>{
        data.forEach(item=>{
            createCategory(item)
        })
    })
}

function createCategory(category){
    let span = document.createElement('span')
    span.classList = 'block cursor-pointer font-medium w-fit px-3 py-0.5 mb-2 underline'
    span.innerText = category
    span.addEventListener('click', (event)=>{
        showCategory(event.target.innerText)
    })
    categoryContainer.appendChild(span)
}

function showCategory(category){
    fetch(`${API_URL}/products/category/${category}`)
        .then(response => response.json())
        .then(data =>{
            allProductsElement.innerText = ''
            data.products.forEach(item=>{
                createProductCard(item)
            })
        })
}

function getSingleProduct(singleProductId){
    fetch(`${API_URL}/products/${singleProductId}`)
        .then(response => response.json())
        .then(data =>{
            popupProductInfo(data)
        })
    }

function popupProductInfo(product) {
    let div = document.createElement('div')

    let h2 = document.createElement('h2')
    h2.innerText = product.price

    let productImg = document.createElement('img')
    productImg.setAttribute('src', product.thumbnail)

    let span = document.createElement('span')
    span.innerText = product.brand

    div.appendChild(productImg)
    div.appendChild(h2)
    div.appendChild(span)
    
    singleProductInfo.appendChild(div)

}