/*headline animation*/
document.addEventListener('DOMContentLoaded', () => {
    const headlines = document.querySelectorAll('.headline span');
    headlines.forEach((span, index) => {
        span.style.animationDelay = `${index * 0.2}s`;
    });
});