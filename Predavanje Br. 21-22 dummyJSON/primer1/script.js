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
    productCard.classList = 'p-4 border flex flex-col items-center h-[250px] bg-white relative'
    productCard.setAttribute('data-productid', product.id)
    productCard.addEventListener('click', (event)=>{
        console.log(event.target.getAttribute('data-productid'))
        togglePopup()
    })
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

    // Append info to product card
    productCard.appendChild(img)
    productCard.appendChild(title)
    productCard.appendChild(price)

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
    togglePopup()
})


// =======================================================

getAllCategories()

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