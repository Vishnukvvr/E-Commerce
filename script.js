const cartIcon = document.getElementById('cart');
const cartContainer = document.getElementById('div1');
const cartDisplay = document.getElementById('cart-container'); 
const cartCount = document.createElement('span');
cartCount.id = 'cart-count';
cartCount.style.display = 'none';
cartIcon.appendChild(cartCount);
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
let cartItems = [];

cartIcon.addEventListener('click', () => {
  cartContainer.style.display = cartContainer.style.display === 'none' || cartContainer.style.display === '' ? 'block' : 'none';
  updateCartDisplay(); 
});

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('.product-name').textContent; 
    const productPrice = productCard.querySelector('.product-price').textContent.replace('$', ''); 
    const productImage = productCard.querySelector('img').src; 

    const newItem = {
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
      image: productImage,
    };
    cartItems.push(newItem); 
    updateCartDisplay(); 
  });
});

function updateCartDisplay() {
  cartDisplay.innerHTML = ''; 
  let totalPrice = 0;

  if (cartItems.length === 0) {
    cartDisplay.innerHTML = '<div class="empty-cart">Your cart is empty!</div>';
    cartCount.style.display = 'none'; 
  } else {
    cartCount.style.display = 'inline'; 
    cartCount.textContent = cartItems.length;

    cartItems.forEach(item => {
      const cartProduct = document.createElement('div');
      cartProduct.classList.add('cart-product');
      cartProduct.innerHTML = `
        <img src="${item.image}" class="cart-image" alt="${item.name}">
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>$${item.price.toFixed(2)}</p>
          <button class="remove-from-cart" data-id="${item.id}">Remove</button>
        </div>
      `;
      cartDisplay.appendChild(cartProduct);

      totalPrice += item.price;

      cartProduct.querySelector('.remove-from-cart').addEventListener('click', () => {
        cartItems = cartItems.filter(cartItem => cartItem.id !== item.id); 
        updateCartDisplay();
      });
    });

    const totalDisplay = document.createElement('div');
    totalDisplay.classList.add('total-price');
    totalDisplay.innerHTML = `<h4>Total Price: $${totalPrice.toFixed(2)}</h4>`;
    cartDisplay.appendChild(totalDisplay);
  }
}

const threeLineMenu = document.getElementById('three');
const menuList = document.querySelector('.list ul');
threeLineMenu.addEventListener('click', () => {
  menuList.style.display = menuList.style.display === 'none' || menuList.style.display === '' ? 'flex' : 'none';
});

window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



const loginButton = document.getElementById('login'); 
const loginModal = document.getElementById('login-modal');
const closeModal = document.querySelector('.close');
const loginForm = document.getElementById('login-form');

loginButton.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'vishnu' && password === 'vishnu') {
    alert('Login successful!');
    loginModal.style.display = 'none';
    loginButton.textContent = 'Account';
  } else {
    alert('Invalid username or password');
  }
});



