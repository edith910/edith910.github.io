// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");


// Scroll to top selection
const scrollUp = document.querySelector("#Scroll-up");


// Select nav links
const navLink = document.querySelectorAll(".nav-link");


// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});


// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

//scroll top selection
//const scrollUp = document.querySelector('#Scroll-up');

//funciontionaly scroll
//scrollUp.addEventListener('click', () =>
   // {window.scrollTo({
     //   top: 0,
   //     left: 0,
 //       behavior:'smooth',
 //   });
//    }
//);