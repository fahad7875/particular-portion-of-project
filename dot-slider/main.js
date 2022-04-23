//  ====﷽====

const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");

dots.forEach((element, index, array) => {
  element.addEventListener("click", () => {
    array.forEach((val) => {
      val.classList.remove("active");
    });
    element.classList.add("active");
    showImage(index);
  });
});

function showImage(index) {
  slides.forEach((element) => {
    element.classList.remove("show");
  });

  slides[index].classList.add("show");
}

// happy coding!!!!!!
// this project is made by Fahad at 22th April, 2022
