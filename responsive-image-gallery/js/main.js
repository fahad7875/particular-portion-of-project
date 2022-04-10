// selecting all necessary dom element
const listType = document.querySelectorAll("li");
const card = document.querySelectorAll(".card");

// filterProcess function

const filterProcess = (item) => {
  listType.forEach((val) => {
    val.className = "";
  });
  item.className = "active";

  let value = item.textContent;

  showFilterdImage(value);
};

// show filtered image function

const showFilterdImage = (value) => {
  card.forEach((element) => {
    element.style.display = "none";

    let type = element.getAttribute("data-id");

    if (type === value || value === "all") {
      element.style.display = "block";
    }
  });
};

// adding event listener here

listType.forEach((item) => {
  item.addEventListener("click", () => {
    filterProcess(item);
  });
});

// happy coding!!!
// this project made by Fahad in 10 April, 2022
