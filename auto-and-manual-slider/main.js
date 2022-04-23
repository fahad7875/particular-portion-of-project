//  ====﷽====

// selecting dom element
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".dot-indicator");

const sLen = slides.length;
let index = 0;

let timer = setInterval(autoPlay, 3000);

function autoPlay() {
  nextSlide();
  updateDotIndicator();
}

function nextSlide() {
  if (index == sLen - 1) {
    index = 0;
  } else {
    index++;
  }

  changeSlide();
}

function prevSlide() {
  if (index === 0) {
    index = sLen - 1;
  } else {
    index--;
  }

  changeSlide();
}

function changeSlide() {
  slides.forEach((element, index, arry) => {
    element.classList.remove("active");
  });

  slides[index].classList.add("active");
}

window.onload = () => {
  dotIndicator();
};

prev.addEventListener("click", () => {
  prevSlide();
  updateDotIndicator();
  resetTimer();
});

next.addEventListener("click", () => {
  nextSlide();
  updateDotIndicator();
  resetTimer();
});

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoPlay, 3000);
}

function dotIndicator() {
  slides.forEach((element, index) => {
    const dotDiv = document.createElement("div");

    dotDiv.addEventListener("click", () => {
      indicateSlide(dotDiv);
    });

    dotDiv.id = index;
    if (index === 0) {
      dotDiv.className = "active";
    }

    indicator.appendChild(dotDiv);
  });
}

function indicateSlide(element) {
  index = element.id;
  changeSlide();
  updateDotIndicator();
  resetTimer();
}

function updateDotIndicator() {
  const dotLen = indicator.children.length;
  for (let i = 0; i < dotLen; i++) {
    indicator.children[i].classList.remove("active");
  }
  indicator.children[index].classList.add("active");
}

// happy coding!!!!!!!
// this project made by Fahad at 23th April, 2022.
