// DOM
const blogContainer = document.querySelector(".blog");
const toggleButton = document.querySelector("#toggle-btn");

const switchTheme = () => {
  blogContainer.classList.toggle("dark");
};

toggleButton.addEventListener("click", switchTheme);
