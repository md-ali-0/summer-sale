function getInputValue(inputID) {
    const inputValue = parseFloat(document.getElementById(inputID).innerText);
    return inputValue;
}

function discountUpdate() {
    const DiscountPrice = getInputValue('discount-price');
    const grandTotalPrice = currentTotalPrice - DiscountPrice;

    const totalPrice = document.getElementById('grand-total');
    totalPrice.innerText = grandTotalPrice;
}

function setTotalPriceValue(price) {
    const totalPrice = document.getElementById('total-price');
    previsouTotalPrice = parseFloat(totalPrice.innerText);
    currentTotalPrice = previsouTotalPrice + price;
    totalPrice.innerText = currentTotalPrice.toFixed(2);

    discountUpdate()
    
    if (currentTotalPrice>0) {
        const buyButton =  document.getElementById('make-purchase');
        buyButton.disabled = false;
    }
    if (currentTotalPrice>=200) {
        const cuponButton =  document.getElementById('cupon-apply');
        cuponButton.disabled = false;
    }
}

function addToCartEntry(productName) {
    const cartEntry = document.getElementById('cart-entry')
    const p = document.createElement('p')
    const count = cartEntry.childElementCount;
    p.innerHTML = `${count + 1 }. ${productName}`
    p.classList.add('text-xl','font-medium');
    cartEntry.appendChild(p);
}


// Buy Now Button
document.getElementById('make-purchase').addEventListener('click', function () {
    const successModal = document.querySelector('#success-modal');
    successModal.classList.remove('hidden');
    successModal.classList.add('flex', 'justify-center', 'items-center');
});

// Go home Button
document.getElementById('go-home').addEventListener('click', function () {
    window.location.reload();
})

// Product Discount

document.querySelector('#cupon-apply').addEventListener('click', function () {
    const cuponValue = document.getElementById('cupon-code').value;
    console.log(cuponValue);
    if (cuponValue === 'SELL200') {
        const totalPrice = parseFloat(document.getElementById('total-price').innerText);
        const uppdateDiscounPrice = totalPrice * 0.20;
        const newDiscountPrice = document.getElementById('discount-price');
        newDiscountPrice.innerText = uppdateDiscounPrice.toFixed(2)
        discountUpdate()
    }
})

// Product Add To Cart

document.querySelector('#k-accessories1').addEventListener('click', function () {
    const productName = 'K. Accessories';
    addToCartEntry(productName)
    const price =  parseFloat(getInputValue('k-accessories1-price'));
    setTotalPriceValue(price)
})

document.querySelector('#k-accessories2').addEventListener('click', function () {
    const productName = 'K. Accessories';
    addToCartEntry(productName)
    const price =  parseFloat(getInputValue('k-accessories2-price'));
    setTotalPriceValue(price)
})

document.querySelector('#home-cooker').addEventListener('click', function () {
    const productName = 'Home Cooker';
    addToCartEntry(productName)
    const price =  parseFloat(getInputValue('home-cooker-price'));
    setTotalPriceValue(price)
})

document.querySelector('#sports-back-cap').addEventListener('click', function () {
    const productName = 'Sports Back Cap';
    addToCartEntry(productName)
    const price =  parseFloat(getInputValue('sports-back-cap-price'));
    setTotalPriceValue(price)
})

document.querySelector('#full-jersey-set').addEventListener('click', function () {
    const productName = 'Full Jersey Set';
    addToCartEntry(productName)
    const price =  parseFloat(getInputValue('full-jersey-set-price'));
    setTotalPriceValue(price)
})

document.querySelector('#sports-cates').addEventListener('click', function () {
    const productName = 'Sports cates';
    addToCartEntry(productName)
    const price =  parseFloat(getInputValue('sports-cates-price'));
    setTotalPriceValue(price)
})