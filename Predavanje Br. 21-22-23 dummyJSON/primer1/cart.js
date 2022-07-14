const cartItemsContainer = document.getElementById('cart-list')
let cartItemsCount = document.getElementById('cartItemsCount')
const API_URL = 'https://dummyjson.com'

let localStorageItemsId = JSON.parse(localStorage.getItem('cart'))
cartItemsCount.innerText = localStorageItemsId.length

localStorageItemsId?.forEach(data =>{
    getSingleProduct(data)
})

function getSingleProduct(singleProductId){
    fetch(`${API_URL}/products/${singleProductId}`)
        .then(response => response.json())
        .then(data =>{
            createCartItem(data)
        })
    }

function createCartItem(product){
    let divContainer = document.createElement('div')
    let cartItemInfo = document.createElement('div')
    let cartItemImg = document.createElement('img')
    let cartItemTitle = document.createElement('h2')
    let cartItemPrice = document.createElement('span')
    let btnRemove = document.createElement('button')

    divContainer.classList = 'flex items-center justify-between w-fit mb-2 odd:bg-gray-200 p-2'
    divContainer.setAttribute('data-productid', product.id)


    cartItemInfo.classList = 'flex justify-between items-center w-[500px]'

    cartItemImg.setAttribute('src', product.thumbnail)
    cartItemImg.classList = 'border border-gray-900 h-[90px] w-[90px]'

    cartItemTitle.innerText = product.title
    cartItemTitle.classList = 'text-center font-medium text-xl ml-1 mr-1'

    cartItemPrice.innerText = `${product.price} $`
    cartItemPrice.classList = 'bg-slate-800 text-white p-1'

    btnRemove.innerHTML = 'remove'
    btnRemove.classList = 'bg-rose-500 p-2 hover:bg-rose-600 cursor-pointer ml-3'
    btnRemove.addEventListener('click', ()=>{
        localStorageItemsId = localStorageItemsId.filter(data =>{
            return data != event.target.parentElement.getAttribute('data-productid')
        })
        localStorage.setItem('cart', JSON.stringify(localStorageItemsId))
        event.target.parentElement.remove()
        cartItemsCount.innerText = localStorageItemsId.length
    })


    cartItemInfo.appendChild(cartItemImg)
    cartItemInfo.appendChild(cartItemTitle)
    cartItemInfo.appendChild(cartItemPrice)

    divContainer.appendChild(cartItemInfo)
    divContainer.appendChild(btnRemove)

    cartItemsContainer.appendChild(divContainer)

}