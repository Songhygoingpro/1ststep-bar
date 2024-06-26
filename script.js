/*block reveal animation*/
const hero_section = document.querySelectorAll('.hero-section .reveal-block [data-aos="custom-fade-up"]');
hero_section.forEach((element, index) => {
    element.setAttribute('data-aos-delay', `${index * 100}`);
});

const fade_up = document.querySelectorAll('[data-aos="fade-up"]');
fade_up.forEach((element, index) => {
    element.setAttribute('data-aos-delay', `${index * 100}`);
});

const information_section = document.querySelectorAll('.information-section .reveal-block [data-aos="custom-fade-up"]');
information_section.forEach((element, index) => {
    element.setAttribute('data-aos-delay', `${index * 100}`);
});

const recruit_section = document.querySelectorAll('.recruit-section .reveal-block [data-aos="custom-fade-up"]');
recruit_section.forEach((element, index) => {
    element.setAttribute('data-aos-delay', `${index * 100}`);
});

const sharedoffice_section = document.querySelectorAll('.sharedoffice-section .reveal-block [data-aos="custom-fade-up"]');
sharedoffice_section.forEach((element, index) => {
    element.setAttribute('data-aos-delay', `${index * 100}`);
});

/*Lanauage dropdown menu*/

document.querySelectorAll(".lang-switcher").forEach((switcher) => {
    switcher.addEventListener("click", function () {

        document.querySelectorAll(".expand-icon").forEach((icon) => {
          icon.classList.toggle("rotate-180");
        });
        
        document.querySelector(".lang-menu").classList.toggle('opacity-100');
        document.querySelector(".lang-menu").classList.toggle("scale-y-100");
        
        document.querySelector(".lang-menu--mobile").classList.toggle("opacity-100");
        document.querySelector(".lang-menu--mobile").classList.toggle("scale-y-100");
        document.querySelector(".lang-menu--mobile").classList.toggle("h-32");
      })});