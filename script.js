document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');
    
    const buttons = document.querySelectorAll('.product button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product').dataset.product;
            alert(`${product} added to your basket!`);
            
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });
});
