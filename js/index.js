window.addEventListener('scroll', function() {
var stickynav = document.querySelector('.stickynav');
var navLinks = document.querySelectorAll('.navlink');
var scrollPosition = window.scrollY;

if (scrollPosition > 0) {
    stickynav.classList.add('sticky');
    navLinks.forEach(function(navLink) {
    navLink.style.color = '#D5D2D6';
    });
} else {
    stickynav.classList.remove('sticky');
    navLinks.forEach(function(navLink) {
    navLink.style.color = '#43595F';
    });
}
});

window.addEventListener('scroll', function() {
var stickynav = document.querySelector('.stickynav');
var navLinks = document.querySelectorAll('.navlink');
var scrollPosition = window.scrollY;

if (scrollPosition > 0) {
stickynav.classList.add('sticky');
navLinks.forEach(function(navLink) {
    navLink.classList.add('scrolled'); // Add a class to indicate scrolling
});
} else {
stickynav.classList.remove('sticky');
navLinks.forEach(function(navLink) {
    navLink.classList.remove('scrolled'); // Remove the class when scrolling is at the top
});
}
});