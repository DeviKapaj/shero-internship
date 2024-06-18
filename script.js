document.addEventListener('DOMContentLoaded', function() {
  const list = document.getElementById('horizontal-list');
  const items = list.getElementsByClassName('horizontal-list_item');
  const dots = document.getElementById('navigation-dots').getElementsByClassName('dot');
  const nextButton = document.getElementById('Next');
  const backButton = document.getElementById('Back');

  let index = 0;

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth; // Width of one item
    list.style.transform = `translateX(${-index * itemWidth}px)`;

    // Update the active dot
    for (let dot of dots) {
      dot.classList.remove('active');
    }
    dots[index].classList.add('active');
  }

  nextButton.addEventListener('click', function() {
    if (index < items.length - 1) {
      index++;
    } else {
      index = 0;
    }
    updateCarousel();
  });

  backButton.addEventListener('click', function() {
    if (index > 0) {
      index--;
    } else {
      index = items.length - 1;
    }
    updateCarousel();
  });

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
      index = i;
      updateCarousel();
    });
  }

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
});
