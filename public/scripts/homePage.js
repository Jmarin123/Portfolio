const burger = document.getElementsByClassName('burger')[0];
const navbar = document.getElementsByClassName('navbar-links')[0];
const navLinks = document.querySelectorAll('.navbar-links li');
const midBar = document.getElementsByClassName('bar2')[0];
const topBar = document.getElementsByClassName('bar1')[0];
const lastBar = document.getElementsByClassName('bar3')[0];
const fullNav = document.getElementsByClassName('navbar')[0];

burger.addEventListener('click', () => {
    navbar.classList.toggle('navbar-active');
    navLinks.forEach((link, index) => {
        if (!navbar.classList.contains('navbar-active')) {
            link.style.animation = `navLinkFadeOut 0.5s ease forwards`;
        } else {
            link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7}s`
        }
    });
    burger.classList.toggle('toggle');
    if (navbar.classList.contains('navbar-active')) {
        disableScroll();
        topBar.style.animation = 'topBarFirst 1s ease forwards';
        midBar.style.animation = 'midBarFade 1s ease forwards';
        lastBar.style.animation = 'lastBarFirst 1s ease forwards';
    } else {
        enableScroll();
        topBar.style.animation = 'topBarSecond 1s ease forwards';
        midBar.style.animation = 'midBarReturn 1s ease forwards';
        lastBar.style.animation = 'lastBarSecond 1s ease forwards';
    }
})

window.addEventListener('resize', function (event) {
    var newWidth = window.innerWidth;
    if (newWidth >= 780) {
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
        });
        enableScroll();
    } else {
        if (navbar.classList.contains('navbar-active')) {
            disableScroll();
            navLinks.forEach((link, index) => {
                if (!link.style.animation) {
                    link.style.animation = 'navLinkFadeIn 0s ease forwards';
                }
            });
            topBar.style.animation = 'topBarFirst 0s ease forwards';
            midBar.style.animation = 'midBarFade 0s ease forwards';
            lastBar.style.animation = 'lastBarFirst 0s ease forwards';
        } else {
            enableScroll();
            topBar.style.animation = 'topBarSecond 0s ease forwards';
            midBar.style.animation = 'midBarReturn 0s ease forwards';
            lastBar.style.animation = 'lastBarSecond 0s ease forwards';
        }
    }
});


var keys = { 33: 1, 34: 1, 32: 1, 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function removeMiddleMouse(e) {
    if (e.button === 1) {
        e.preventDefault();
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    window.addEventListener('mousedown', removeMiddleMouse, false);

}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    window.removeEventListener('mousedown', removeMiddleMouse, false);
}
