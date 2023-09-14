// Función para mostrar/ocultar el carrito de compras
const cart = document.getElementById('cart');
let isCartVisible = false;

function toggleCart() {
    isCartVisible = !isCartVisible;
    cart.style.display = isCartVisible ? 'block' : 'none';
}

// Función para agregar un producto al carrito
function addToCart(productName, productPrice, quantity = 1) {
    const cartItems = document.getElementById('cart-items');
    const item = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.textContent = 'Eliminar';
    removeButton.addEventListener('click', () => removeCartItem(item));

    item.innerHTML = `
        <div class="edit">
            <button class="decrement">-</button>
            <input class="quantity" type="number" min="1" max="10" value="${quantity}">
            <button class="increment">+</button>
        </div>
        ${productName}: $${(productPrice * quantity).toFixed(2)}`;
    item.appendChild(removeButton);
    cartItems.appendChild(item);

    // Actualizar el carrito de compras
    updateCartTotal();
}

// Función para actualizar el total del carrito de compras
function updateCartTotal() {
    let total = 0;
    const items = cart.querySelectorAll('li');
    items.forEach((item) => {
        const itemText = item.textContent;
        const price = parseFloat(itemText.split(': $')[1]);
        total += price;
    });

    // Mostrar el total en el carrito
    cartItems.innerHTML = `<li><strong>Total:</strong> $${total.toFixed(2)}</li>`;
}

// Función para eliminar un elemento del carrito
function removeCartItem(item) {
    item.remove();
    updateCartTotal();
}

// Evento para mostrar/ocultar el carrito al hacer clic en el ícono
cart.addEventListener('click', toggleCart);

// Ejemplo de agregar productos al carrito (puedes personalizar esto)
addToCart('Producto 1', 19.99);
addToCart('Producto 2', 24.99, 3);
