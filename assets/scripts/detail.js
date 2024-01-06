function changeQuantity(e) {
  var quantityInput = document.querySelector('.quantity-input');
  var quantity = parseInt(quantityInput.value);

  if (e.target.classList.contains('decrease')) {
    quantity--;
  } else if (e.target.classList.contains('increase')) {
    quantity++;
  }

  quantityInput.value = quantity;

  if (quantity < 1) {
    quantityInput.value = 1;
  }
}

document.querySelector('.quantity-input').addEventListener('change', changeQuantity);
document.querySelector('.add-to-cart').addEventListener('click', function () {
  var quantityInput = document.querySelector('.quantity-input');
  var quantity = parseInt(quantityInput.value);

  // Tambahkan quantity ke cart

  // Set quantity menjadi 0
  quantityInput.value = 0;
});
