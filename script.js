// MeviQo main JavaScript
// Existing site functionality preserved: Lucide icons, AOS animations, and navbar blur.

lucide.createIcons();

AOS.init({
    once: true,
    offset: 100,
    duration: 800,
    easing: 'ease-out-cubic',
});

window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-[#0a0f18]/80');
        nav.classList.remove('bg-transparent');
    } else {
        nav.classList.remove('bg-[#0a0f18]/80');
        nav.classList.add('bg-transparent');
    }
});
