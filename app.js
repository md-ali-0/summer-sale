function getInputValue(inputID) {
    const inputValue = parseFloat(document.getElementById(inputID).innerText);
    return inputValue
}

function setTotalPriceValue(price) {
    const element = document.getElementById('total-price');
    previsouTotalPrice = parseFloat(element.innerText);
    currentTotalPrice = previsouTotalPrice + price
    element.innerText = currentTotalPrice.toFixed(2)

    const DiscountPrice = getInputValue('discount-price');
    const grandTotalPrice = currentTotalPrice - DiscountPrice;

    const totalPrice = document.getElementById('grand-total');
    totalPrice.innerText = grandTotalPrice;
    
    
    if (currentTotalPrice>0) {
        const buyButton =  document.getElementById('make-purchase');
        buyButton.disabled = false
    }
    if (currentTotalPrice>=200) {
        const cuponButton =  document.getElementById('cupon-apply');
        cuponButton.disabled = false
    }
}

function addToCartEntry(productName) {
    const cartEntry = document.getElementById('cart-entry')
    const p = document.createElement('p')
    const count = cartEntry.childElementCount;
    p.innerHTML = `${count + 1 }. ${productName}`
    p.classList.add('text-xl')
    p.classList.add('font-medium')
    cartEntry.appendChild(p)
}


// Product Add To Cart

document.querySelector('#k-accessories1').addEventListener('click', function () {
    const productName = 'K. Accessories';
    addToCartEntry(productName)
    const price =  parseFloat(getInputValue('k-accessories1-price'));
    console.log(price);
    setTotalPriceValue(price)
})

document.querySelector('#k-accessories2').addEventListener('click', function () {
    const productName = 'K. Accessories';
    addToCartEntry(productName)
    const price =  parseFloat(getInputValue('k-accessories2-price'));
    console.log(price);
    setTotalPriceValue(price)
})

document.querySelector('#home-cooker').addEventListener('click', function () {
    const productName = 'Home Cooker';
    addToCartEntry(productName)
    const price =  parseFloat(getInputValue('home-cooker-price'));
    console.log(price);
    setTotalPriceValue(price)
})

document.querySelector('#sports-back-cap').addEventListener('click', function () {
    const productName = 'Sports Back Cap';
    addToCartEntry(productName)
    const price =  parseFloat(getInputValue('sports-back-cap-price'));
    console.log(price);
    setTotalPriceValue(price)
})

document.querySelector('#full-jersey-set').addEventListener('click', function () {
    const productName = 'Full Jersey Set';
    addToCartEntry(productName)
    const price =  parseFloat(getInputValue('full-jersey-set-price'));
    console.log(price);
    setTotalPriceValue(price)
})

document.querySelector('#sports-cates').addEventListener('click', function () {
    const productName = 'Sports cates';
    addToCartEntry(productName)
    const price =  parseFloat(getInputValue('sports-cates-price'));
    console.log(price);
    setTotalPriceValue(price)
})