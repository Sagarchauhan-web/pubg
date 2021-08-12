const barToggle = document.querySelector(".bar");
const menuNavigation = document.querySelector(".menu_navigation");

barToggle.addEventListener("click", () => {
  menuNavigation.classList.toggle("show");
});

///// section revealing animation
const revealing = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  sectionObserver.unobserve(entry.target);
};

const allSections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(revealing, {
  root: null,
  threshold: 0.05,
});

allSections.forEach((sec) => {
  sectionObserver.observe(sec);
  sec.classList.add("section--hidden");
});

////// stiky navigation
// const header = document.querySelector(".header");

// const sticky = (entries) => {
//   const [entry] = entries;
//   console.log(entry);
//   if (entry.isIntersecting) {
//     entry.target.classList.add("sticky");
//     console.log("don");
//   } else {
//     entry.target.classList.remove("sticky");
//     console.log("r");
//   }
// };

// const headerObserver = new IntersectionObserver(sticky, {
//   root: null,
//   threshold: 0.4,
// });

// headerObserver.observe(header);

//////////////// slider ///////////////////////

const slides = document.querySelectorAll(".slide-card");
const rightBtn = document.querySelector(".slide__btn--right");
const leftBtn = document.querySelector(".slide__btn--left");

let curSlide = 0;
console.log(slides);

slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${120 * i}%)`;
});

rightBtn.addEventListener("click", () => {
  if (curSlide >= slides.length - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${120 * (i - curSlide)}%)`;
  });
});

leftBtn.addEventListener("click", () => {
  if (curSlide <= 0) {
    curSlide = slides.length - 1;
  } else {
    curSlide--;
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${120 * (i - curSlide)}%)`;
  });
});
