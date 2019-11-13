import './scss/style.scss';

// Make reload page go to top
window.onbeforeunload = function () {
     window.scrollTo(0,0);
}

// Page Load Animation
window.onload = function() {
    document.getElementById('about-me-h3').classList.add('load');
    setTimeout(function() {
        document.getElementById('about-me-p').classList.add('load');
    },1000);
}

// Mobile Nav Sticky
window.onscroll = () => {
    stickyFunction();
}

let navbar = document.getElementById('navbar');
let sticky = navbar.offsetTop;

function stickyFunction() {
    if(window.pageYOffset >= sticky) {
        if (window.innerWidth < 1024) {
            navbar.classList.add('sticky');
        }
    } else {
        navbar.classList.remove('sticky');
    }
}

// Portfolio Filter
let emailFilter = document.getElementById('email-filter');
let landingFilter = document.getElementById('landing-filter');
let javascriptFilter = document.getElementById('javascript-filter');

emailFilter.addEventListener('click', function() {
    clearFilter();
    emailFilter.classList.add('active');
    filterProjects('email');
});

landingFilter.addEventListener('click', function() {
    clearFilter();
    landingFilter.classList.add('active');
    filterProjects('landing');
});

javascriptFilter.addEventListener('click', function() {
    clearFilter();
    javascriptFilter.classList.add('active');
    filterProjects('javascript');
});

function clearFilter() {
    emailFilter.classList.remove('active');
    landingFilter.classList.remove('active');
    javascriptFilter.classList.remove('active');
}

function filterProjects(filter) {
    let grid = document.getElementById('portfolio-grid');
    let childOfGrid = grid.children;
    for(var i = 0; i < childOfGrid.length; i++) {
        if(childOfGrid[i].classList[1] == filter) {
            childOfGrid[i].style.display = 'block'
        } else {
            childOfGrid[i].style.display = 'none';
        }
    }
}