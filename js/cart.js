/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbodyElement=document.getElementById('TBODY');

  tbodyElement.textContent='';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbody=document.getElementById('TBODY');

  // TODO: Iterate over the items in the cart

  // TODO: Create a TR
  for (let i = 0; i < cart.items.length; i++) {
    let TR = document.createElement('tr');
    tbody.appendChild(TR);
 
 
     let Delete=document.createElement('td');
     Delete.textContent= 'X';
     TR.appendChild(Delete);
 
 let quantity=document.createElement('td');
 quantity.textContent=cart.items[i].quantity;
 TR.appendChild(quantity);
 
 let productTD=document.createElement('td');
 productTD.textContent=cart.items[i].product;
 TR.appendChild(productTD);
   }
  // TODO: Create a TD for the delete link, quantity,  and the item

  // let row = document.createElement('tr');
  // let Delete=document.createElement('td');
  // row.appendChild(Delete);
  // deleteTd.textContent= 'X';
  

  // let quantity=document.createElement('td');
  // tr.appendChild(quantity);
  // quantity.textContent=cart.items.quantity;
  

  // let productTD=document.createElement('td');
  // tr.appendChild(productTD);
  // productTD.textContent=cart.items.product;
  
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  if (event.target.textContent === 'X') {
  
    cart.removeItem(event.target.id);
    console.log(event.target.textContent);
    
    }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  localStorage.setItem('cart',JSON.stringify(cart.items));

  // TODO: Re-draw the cart table
renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
