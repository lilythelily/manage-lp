"use strict";

const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");

// === display mobile menu ===

function toggleHide(item) {
  item.classList.toggle("hide");
}

function hamburgerDisplay() {
  toggleHide(hamburgerMenu);
  toggleHide(overlay);
  hamburgerIcon.classList.toggle("hamburger-close");
}

hamburgerIcon.addEventListener("click", hamburgerDisplay);

overlay.addEventListener("click", hamburgerDisplay);

// === swipe testimonial cards ===

function setActiveDot(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("dot-displayed", i === index);
  });
}

const sliderContainer = document.querySelector(
  ".section-testimonials__wrapper"
);
const testimonialCards = document.querySelectorAll(
  ".section-testimonials__card"
);
const dots = document.querySelectorAll(".dot");

let width = window.innerWidth * 0.9 + 24;
const startingPosition = width * 3;

function updateWidth() {
  width = window.innerWidth * 0.9 + 24;
}

window.addEventListener("resize", updateWidth);
updateWidth();

function removeDot() {
  dots.forEach((item) => {
    item.classList.remove("dot-displayed");
  });
}

// === click behavior ===

testimonialCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const isLast = index === testimonialCards.length - 1;
    if (isLast) {
      sliderContainer.scrollLeft -= startingPosition;
      setActiveDot(0);
    } else {
      sliderContainer.scrollLeft += width;
      setActiveDot(index + 1);
    }
  });
});

// === scroll target observer ===

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = [...testimonialCards].indexOf(entry.target);
        setActiveDot(index);
      }
    });
  },
  {
    root: sliderContainer,
    threshold: 0.8,
  }
);

testimonialCards.forEach((card) => observer.observe(card));

// === input field validation ===

const form = document.querySelector("form");
const input = document.querySelector("input");
const small = document.querySelector("small");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function error() {
  small.classList.remove("hide");
  input.classList.add("error-border");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() == "") {
    error();
    small.innerHTML = "This field is required.";
  } else if (!regex.test(input.value)) {
    error();
    small.innerHTML = "Please enter a valid Email.";
  } else {
    input.classList.remove("error-border");
    small.innerHTML = "Thank you!";
    setTimeout(() => {
      small.classList.add("hide");
    }, 2000);
  }
});
