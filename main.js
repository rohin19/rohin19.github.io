const navLogo = document.querySelector('#navbar_logo');

// Highlight navbar for each section
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const aboutMenu = document.querySelector('#about-page');
    const projectsMenu = document.querySelector('#projects-page');
    const contactMenu = document.querySelector('#contact-page');

    let scrollPos = window.scrollY;
    // to find positioning for breaks
    // console.log(scrollPos); 

    // adds the highlight class to my menu items
    // dont want highlighting on mobile and pos when it appears
    if (window.innerWidth > 960  && scrollPos < 642) {
        contactMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1564) {
        aboutMenu.classList.add('highlight');
        projectsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2448) {
        aboutMenu.classList.remove('highlight');
        projectsMenu.classList.add('highlight');
        contactMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3200) {
        aboutMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        contactMenu.classList.add('highlight');
        return;
    }

    if ( (elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Contact form JS
document.getElementById('contact_form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

    // Get form values
    const name = document.getElementById('input_name').value.trim();
    const email = document.getElementById('input_email').value.trim();
    const message = document.getElementById('input_message').value.trim();


    // Validation flags
    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {
        this.submit();
        // clear forms
        document.getElementById('input_name').value = "";
        document.getElementById('input_email').value = "";
        document.getElementById('input_message').value = "";

        alert('Form submitted successfully!');
    }
});

// Element fade in when scrolling
const elements = document.querySelectorAll('.fade-in');

const checkVisibility = () => {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);
