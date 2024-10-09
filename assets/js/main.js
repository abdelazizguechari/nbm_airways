/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});















    // Toggle Language Dropdown
    function toggleLanguageDropdown() {
      closeAllDropdowns();
      document.getElementById("language-dropdown-menu").classList.toggle("show");
  }

  // Toggle Login Dropdown
  function toggleLoginDropdown() {
      closeAllDropdowns();
      document.getElementById("login-dropdown-menu").classList.toggle("show");
  }

  // Close All Dropdowns
  function closeAllDropdowns() {
      const dropdowns = document.querySelectorAll('.dropdown-content');
      dropdowns.forEach(dropdown => dropdown.classList.remove('show'));
  }

  // Toggle Mobile Menu
  function toggleMobileMenu() {
      const navMenu = document.querySelector('header nav ul');
      const menuContainer = document.querySelector('header .menu');
      const menuToggle = document.querySelector('.menu-toggle');

      // Toggle menu display
      navMenu.classList.toggle('active');
      menuContainer.classList.toggle('active');
      menuToggle.classList.toggle('active');
  }

  // Close dropdowns on outside click
  window.onclick = function(event) {
      if (!event.target.closest('.language-dropdown') && !event.target.closest('.menu-toggle')) {
          closeAllDropdowns();
      }
  }

  // Handle Language Change
  function changeLanguage(languageCode) {
      console.log("Changing language to: " + languageCode);
      // Language change logic here
  }

  // Handle Login Navigation
  function handleLogin() {
      console.log("Navigating to login page...");
      // Add your login functionality or redirect here
  }

  // Handle Sign-Up Navigation
  function handleSignUp() {
      console.log("Navigating to sign up page...");
      // Add your sign-up functionality or redirect here
  }

  // Add event listener for mobile menu toggle button
  document.addEventListener("DOMContentLoaded", function() {
      const menuToggle = document.querySelector('.menu-toggle');
      menuToggle.addEventListener('click', toggleMobileMenu);
  });



  const swiper = new Swiper('.swiper-container', {
      loop: true, // Enables looping of slides
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      centeredSlides: true, // Center the active slide
      slidesPerView: 1.2, // Show one full slide and a part of the next slide
      spaceBetween: 30, // Space between slides
  });