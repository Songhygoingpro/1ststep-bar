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
