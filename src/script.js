/*block reveal animation*/
const hero_section = document.querySelectorAll('.hero-section .reveal-text [data-aos="custom-fade-up"]');
hero_section.forEach((element, index) => {
    element.setAttribute('data-aos-delay', `${index * 100}`);
});

const fade_up = document.querySelectorAll('[data-aos="fade-up"]');
fade_up.forEach((element, index) => {
    element.setAttribute('data-aos-delay', `${index * 100}`);
});

const information_section = document.querySelectorAll('.information-section .reveal-text [data-aos="custom-fade-up"]');
information_section.forEach((element, index) => {
    element.setAttribute('data-aos-delay', `${index * 100}`);
});

const recruit_section = document.querySelectorAll('.recruit-section .reveal-text [data-aos="custom-fade-up"]');
recruit_section.forEach((element, index) => {
    element.setAttribute('data-aos-delay', `${index * 100}`);
});


let lastScrollTop = 0;
const header = document.querySelector(".header");
const burgerInput = document.getElementById("burger");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  // if (scrollTop > lastScrollTop) {
  //   header.style.top = "-88px";
  //   burgerInput.checked = false;
  // } else {
  //   header.style.top = "0";
  // }

  // Apply the background when the header is off the top
  if (scrollTop > 0) {
    header.style.backgroundColor = "#1a1819";
  } else {
    header.style.backgroundColor = "transparent";
  }

  lastScrollTop = scrollTop;
});