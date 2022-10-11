//Set current year in footer section
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Close mobile navigation:
const alllinks = document.querySelectorAll("a:link"); // a = anchors  :link = anchors with href only

alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation
<<<<<<< HEAD
const sectionHeroEl = document.querySelector(".section-pricing");
=======
const sectionHeroEl = document.querySelector(".section-hero");
>>>>>>> 466ec56166e31561e7342b518b00e9ffee39a6bc

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null, //where it starts
    threshold: 0, //how much is visible. could be 1 (completely in view)
<<<<<<< HEAD
    rootMargin: "-70px", //height of navigation bar. must be px
=======
    rootMargin: "-80px", //height of navigation bar. must be px
>>>>>>> 466ec56166e31561e7342b518b00e9ffee39a6bc
  }
);
obs.observe(sectionHeroEl);
