document.querySelectorAll('.product-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const url = card.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  });

  /*add to bag must go back to home page */
document.querySelector('.add-to-bag-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
  });

/*add to each product card: <div class="product-card" data-url="details-wallet.html">
</div>

<div class="product-card" data-url="details-case.html">*/

//for selecting colors
const colorOptions = document.querySelectorAll('.select-color, .select-color-jpg');
const colorNameSpan = document.getElementById('selected-color-name');

colorOptions.forEach(option => {
  option.addEventListener('click', () => {
    colorOptions.forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');

    const selectedName = option.getAttribute('data-color-name');
    colorNameSpan.textContent = selectedName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });
});

// auto-select first image
if (colorOptions.length > 0) {
  colorOptions[0].classList.add('selected');
  const selectedName = colorOptions[0].getAttribute('data-color-name');
  colorNameSpan.textContent = selectedName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


const colorImages = document.querySelectorAll('.select-color, .select-color-jpg');

colorImages.forEach(img => {
  img.addEventListener('click', () => {
    colorImages.forEach(i => i.classList.remove('selected'));
    img.classList.add('selected');
  });
});

// for selecting images per product card

const mainImage = document.getElementById('product1-image');
const imageSelector = document.querySelectorAll('.image-selector');

imageSelector.forEach(image => {
  image.addEventListener('click', () => {
    
    mainImage.src = image.src;

    imageSelector.forEach(t => t.classList.remove('selected'));
    image.classList.add('selected');
  });
});

