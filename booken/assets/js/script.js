'use strict';



/**
 * add event on elements
 */

function addEventOnElem(element, eventType, callback) {
  if (Array.isArray(element)) {
    element.forEach(e => e.addEventListener(eventType, callback));
  } else {
    element.addEventListener(eventType, callback);
  }
}


/**
 * navbar toogle
 */

const navbar = {
  element: document.querySelector("[data-navbar]"),
  toggle: function () {
    this.element.classList.toggle("active");
    overlay.toggle();
  },
};

const overlay = {
  element: document.querySelector("[data-overlay]"),
  toggle: function () {
    this.element.classList.toggle("active");
  },
};

const navTogglers = document.querySelectorAll("[data-nav-toggler]");

function setupNavTogglers() {
  navTogglers.forEach((toggler) => {
    toggler.addEventListener("click", navbar.toggle.bind(navbar));
  });
}

setupNavTogglers();


/**
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

function setActiveElementsOnScroll() {
  const shouldAddActiveClass = window.scrollY > 100;
  header.classList.toggle("active", shouldAddActiveClass);
  backTopBtn.classList.toggle("active", shouldAddActiveClass);
}

window.addEventListener("scroll", setActiveElementsOnScroll);


/**
 * filter functionality
 */

const filterButtons = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");
let lastClickedButton = filterButtons[0];

function applyFilter(selectedFilterButton) {
  lastClickedButton.classList.remove("active");
  selectedFilterButton.classList.add("active");
  lastClickedButton = selectedFilterButton;

  filterItems.forEach(item => {
    item.style.display = item.dataset.filter === selectedFilterButton.dataset.filterBtn ? "block" : "none";
  });
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    applyFilter(button);
  });
});
