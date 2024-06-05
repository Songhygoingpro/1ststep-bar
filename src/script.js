/*block reveal animation*/
const hero_section = document.querySelectorAll('.hero-section__inner .reveal-text span');
hero_section.forEach((element, index) => {
    element.setAttribute('data-aos-delay', `${index * 200}`);
});

const elements = document.querySelectorAll('[data-aos="fade-up"]');
        elements.forEach((element, index) => {
            element.setAttribute('data-aos-delay', `${index * 200}`);
        });