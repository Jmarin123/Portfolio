const title = document.getElementsByClassName('who-am')[0];
const paragraph = document.getElementsByClassName('paragraph')[0];
window.addEventListener('load', (e) => {
    if (window.innerWidth > 780) {
        title.style.animation = 'fadeInTitle 2s forwards';
        paragraph.style.animation = 'fadeInTextFromRight 2s forwards';
    } else {
        title.style.animation = 'fadeInTextFromLeft 2s forwards';
        paragraph.style.animation = 'fadeInTextFromLeft 2s forwards';
    }
});