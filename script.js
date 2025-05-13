const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;


// Add Product Event Listener
addProductButton.addEventListener('click', function(e) {
    // check for product name and price
    if (!productNameInput.value || !productPriceInput.value) {
        alert("Please provide a product name and price")
        return;
    }

    // create new product item
    createNewItem(productNameInput.value, productPriceInput.value);

    // reset input fields
    productNameInput.value = '';
    productPriceInput.value = '';
});


{
    

}

function createNewItem(name, price) {
    const newProduct = document.createDocumentFragment();
    const item = document.createElement('li');
    const span = document.createElement('span');
    const removeButton = document.createElement('button');

   

    // update new product item name and price
    span.textContent = `${name} - $${price}`;
    item.appendChild(span);
    item.dataset.price = price;
    item.classList.add('cart-item');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
     removeButton.addEventListener('click', removeItem)

 // convert price to a number type
    price = Number(price);
    // append elements
    item.appendChild(removeButton);
    cart.appendChild(item);
    // newProduct.appendChild(item);
    // cart.appendChild(newProduct);

    // update total price
    updateTotalPrice(price);
    console.log(totalPrice);
}


// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}
 






