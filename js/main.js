// ==== Home Start ====//
const ingredients = document.querySelectorAll('.home__ingredient');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    ingredients.forEach((el, i) => {
    el.style.transform = `translateY(${scrollY * 0.05 * (i + 1)}px) rotate(var(--initial-rotate))`;
    });
});
// ==== Home End ====//

// ==== Slide Show Utility Function Start ==== //
function startSlideshow(selector, displayStyle, interval) {
  const items = document.querySelectorAll(selector);
  let index = 0;
  setInterval(() => {
    items.forEach((el, i) => el.style.display = i === index ? displayStyle : 'none');
    index = (index + 1) % items.length;
  }, interval);
  // Show first item immediately
  items.forEach((el, i) => el.style.display = i === 0 ? displayStyle : 'none');
}

// ==== Contact Slide Show ==== //
startSlideshow('.contact-left-section img', 'block', 3000);
// ==== Recipe Slide Show  ==== //
startSlideshow('.recipe-content', 'flex', 5000);

// ==== Slide Show Utility Function End ==== //
