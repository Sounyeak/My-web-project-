// Function to update total price based on storage dropdown
function updatePrice() {
  const select = document.getElementById('storage');
  if (!select) return;
  const selectedOption = select.options[select.selectedIndex];
  const price = selectedOption.getAttribute('data-price');
  document.getElementById('totalPrice').innerText = '$' + price;
}

// Function triggered when selecting a storage option from Pricing cards
function selectStorage(size, price) {
  const select = document.getElementById('storage');
  if (!select) return;

  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].value === size) {
      select.selectedIndex = i;
      break;
    }
  }

  document.getElementById('totalPrice').innerText = '$' + price;

  // Scroll smoothly to order form section
  const orderSection = document.getElementById('order-section');
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Event Listeners Initialization
document.addEventListener('DOMContentLoaded', () => {
  const storageSelect = document.getElementById('storage');
  if (storageSelect) {
    storageSelect.addEventListener('change', updatePrice);
  }

const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Display Success Message
      const successBox = document.getElementById('successMessage');
      if (successBox) {
        successBox.classList.remove('hidden');
        successBox.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});