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