/* 
    Updated JavaScript:
    - Generates fewer, larger, slower diamonds
    - Fade in sections on scroll
    - Hero text fades out on scroll
*/

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Scroll-based animations using Intersection Observer
const observerOptions = { threshold: 0.1 };

const sectionTitles = document.querySelectorAll('.section-title');
const sectionDescs = document.querySelectorAll('.section-description');
const cardContainers = document.querySelectorAll('.cards-container');
const projectGrids = document.querySelectorAll('.project-grid');
const projectItems = document.querySelectorAll('.project-item');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sectionTitles.forEach(el => fadeInObserver.observe(el));
sectionDescs.forEach(el => fadeInObserver.observe(el));
cardContainers.forEach(el => fadeInObserver.observe(el));
projectGrids.forEach(el => fadeInObserver.observe(el));
projectItems.forEach(item => fadeInObserver.observe(item));

// Diamonds background generation
const diamondContainer = document.querySelector('.diamond-container');

// Fewer, larger, slower diamonds
const numberOfDiamonds = 5;
for (let i = 0; i < numberOfDiamonds; i++) {
    const diamond = document.createElement('div');
    diamond.classList.add('diamond');
    // Random position
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    diamond.style.left = `${randomX}px`;
    diamond.style.top = `${randomY}px`;
    
    const randomDuration = 40 + Math.random() * 40;
    diamond.style.animationDuration = `${randomDuration}s`;
    diamond.style.opacity = `${0.1 + Math.random() * 0.2}`;
    diamondContainer.appendChild(diamond);
}

// Fade out hero text on scroll
const heroSection = document.querySelector('.hero-section');
const heroContent = document.querySelector('.hero-content');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight;
    const fadePoint = heroHeight * 0.5; // start fading after 50% hero height
    
    if (scrollY > fadePoint) {
        const opacity = Math.max(0, 1 - (scrollY - fadePoint) / (heroHeight * 0.5));
        heroContent.style.opacity = opacity.toString();
    } else {
        heroContent.style.opacity = '1';
    }
});
