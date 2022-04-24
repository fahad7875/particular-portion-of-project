//  ====﷽====

const sliderContainer = document.querySelector(".slider-container");
const innerSlider = document.querySelector(".inner-slider");

let pressed = false;
let startX, x;

sliderContainer.addEventListener("mousedown", (event) => {
  pressed = true;
  startX = event.offsetX - innerSlider.offsetLeft;
  sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseenter", () => {
  sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseleave", () => {
  sliderContainer.style.cursor = "default";
});

sliderContainer.addEventListener("mouseup", () => {
  sliderContainer.style.cursor = "grab";
  pressed = false;
});

sliderContainer.addEventListener("mousemove", (event) => {
  if (!pressed) {
    return;
  }

  event.preventDefault();

  x = event.offsetX;

  innerSlider.style.left = `${x - startX}px`;

  checkBoundary();
});

function checkBoundary() {
  let outer = sliderContainer.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  }

  if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
}

//  happy coding!!!!
// this project made by Fahad at 23th April, 2022 .
