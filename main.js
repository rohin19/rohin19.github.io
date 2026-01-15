const navLogo = document.querySelector('#navbar_logo');
const navbar = document.querySelector('.navbar_container');

// Navbar hide/show on scroll
let lastScrollTop = 0;
const navbarHeight = 60; // height of navbar
const homeSection = document.querySelector('.home');

const handleNavbarScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const homeSectionHeight = homeSection.offsetHeight;
    
    // Only apply hide/show logic on desktop screens (width > 768px)
    if (window.innerWidth > 768) {
        // Only apply hide/show logic after scrolling past home section
        if (scrollTop > homeSectionHeight) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down - hide navbar
                navbar.classList.add('navbar-hidden');
            } else {
                // Scrolling up - show navbar
                navbar.classList.remove('navbar-hidden');
            }
        } else {
            // Always show navbar when in home section
            navbar.classList.remove('navbar-hidden');
        }
    } else {
        // On mobile, always show navbar
        navbar.classList.remove('navbar-hidden');
    }
    
    lastScrollTop = scrollTop;
};

window.addEventListener('scroll', handleNavbarScroll);

// Highlight navbar for each section
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const aboutMenu = document.querySelector('#about-page');
    const projectsMenu = document.querySelector('#projects-page');

    let scrollPos = window.scrollY;
    
    // Get section positions for debugging
    const homeSection = document.querySelector('.home');
    const aboutSection = document.querySelector('.about');
    const projectsSection = document.querySelector('.projects');
    
    // to find positioning for breaks
    // console.log({
    //     scrollPos: scrollPos,
    //     homeEnd: homeSection.offsetTop + homeSection.offsetHeight,
    //     aboutStart: aboutSection.offsetTop,
    //     aboutEnd: aboutSection.offsetTop + aboutSection.offsetHeight,
    //     projectsStart: projectsSection.offsetTop,
    //     projectsEnd: projectsSection.offsetTop + projectsSection.offsetHeight
    // }); 

    // adds the highlight class to my menu items
    // dont want highlighting on mobile and pos when it appears
    if (window.innerWidth > 960 && scrollPos < 500) {
        // Home section (before about section becomes visible)
        aboutMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        // About section (from when it starts becoming visible until projects starts)
        aboutMenu.classList.add('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos >= 1400) {
        // Projects section (when projects starts becoming visible)
        aboutMenu.classList.remove('highlight');
        projectsMenu.classList.add('highlight');
        return;
    }
    if ( (elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Element fade in when scrolling
const elements = document.querySelectorAll('.fade-in');

const checkVisibility = () => {
    elements.forEach(el => {
        el.classList.add('visible');
    });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility); // Also check on page load
window.addEventListener('resize', checkVisibility);

const hamburger = document.getElementById('hamburger');
const navbarMenu = document.getElementById('navbar_menu');

hamburger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
