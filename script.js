document.addEventListener('DOMContentLoaded', function() {
  const productCards = document.querySelectorAll('.product-card');
  const totalPriceElement = document.querySelector('.total-price .total');
  let totalPrice = 0;

  productCards.forEach(card => {
    const unitPrice = parseFloat(card.querySelector('.unit-price').textContent.replace('Ksh.', '').trim());

    const addButton = card.querySelector('.add-item');
    const removeButton = card.querySelector('.remove-item');
    const quantityElement = card.querySelector('.quantity');

    addButton.addEventListener('click', function() {
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      totalPrice += unitPrice;
      totalPriceElement.textContent = `${totalPrice} Ksh.`;
    });

    removeButton.addEventListener('click', function() {
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        totalPrice -= unitPrice;
        totalPriceElement.textContent = `${totalPrice} Ksh.`;
      }
    });
  });
});
