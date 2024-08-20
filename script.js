document.addEventListener('DOMContentLoaded', function () {
  const productCards = document.querySelectorAll('.product-card');
  const totalPriceElement = document.querySelector('.total-price .total');
  let totalPrice = 0;

  productCards.forEach((card) => {
    const unitPrice = parseFloat(
      card.querySelector('.unit-price').textContent.replace('Ksh.', '').trim()
    );

    const addButton = card.querySelector('.add-item');
    const removeButton = card.querySelector('.remove-item');
    const quantityElement = card.querySelector('.quantity');
    const deleteButton = card.querySelector('.fa-trash-alt');
    const favoriteButton = card.querySelector('.fa-heart');

    addButton.addEventListener('click', function () {
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      totalPrice += unitPrice;
      totalPriceElement.textContent = `${totalPrice} Ksh.`;
    });

    //removes the quantities added to the cart
    removeButton.addEventListener('click', function () {
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        totalPrice -= unitPrice;
        totalPriceElement.textContent = `${totalPrice} Ksh.`;
      }
    });

    //improved only on delete button and heart to make it work
    deleteButton.addEventListener('click', function () {
      let quantity = parseInt(quantityElement.textContent);
      totalPrice -= unitPrice * quantity;
      totalPriceElement.textContent = `${totalPrice} Ksh.`;
      quantityElement.textContent = 0; // Reset the quantity to 0
    });

    favoriteButton.addEventListener('click', function () {
      favoriteButton.classList.toggle('favorite');
      // You could also add additional functionality like saving this to a wishlist
    });
  });
});
