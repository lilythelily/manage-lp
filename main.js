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

const sliderContainer = document.querySelector(
  ".section-testimonials__wrapper"
);
const testimonialCards = document.querySelectorAll(
  ".section-testimonials__card"
);
const width = window.innerWidth * 0.9 + 24;
const startingPosition = width * 3;
const dots = document.querySelectorAll(".dot");

function removeDot() {
  dots.forEach((item) => {
    item.classList.remove("dot-displayed");
  });
}

testimonialCards.forEach((card, index) => {
  card.addEventListener("click", (e) => {
    removeDot();
    if (e.target === testimonialCards[3]) {
      sliderContainer.scrollLeft -= startingPosition;
      dots[0].classList.add("dot-displayed");
    } else {
      sliderContainer.scrollLeft += width;
      dots[index + 1].classList.add("dot-displayed");
    }
  });
});

// === scroll target observer ===

const callback1 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      removeDot();
      dots[0].classList.add("dot-displayed");
    }
  });
};
const callback2 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      removeDot();
      dots[1].classList.add("dot-displayed");
    }
  });
};

const callback3 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      removeDot();
      dots[2].classList.add("dot-displayed");
    }
  });
};

const callback4 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      removeDot();
      dots[3].classList.add("dot-displayed");
    }
  });
};

const observer = new IntersectionObserver(callback1, {
  root: null,
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 0.8,
});

const observer2 = new IntersectionObserver(callback2, {
  root: null,
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 0.8,
});

const observer3 = new IntersectionObserver(callback3, {
  root: null,
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 0.8,
});

const observer4 = new IntersectionObserver(callback4, {
  root: null,
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 0.8,
});

const [card1, card2, card3, card4] = testimonialCards;
observer.observe(card1);
observer2.observe(card2);
observer3.observe(card3);
observer4.observe(card4);
