function openLightbox(imagePath) {
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = imagePath;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
let animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets4.lottiefiles.com/packages/lf20_sSa34ZqK.json'
  });
  
  // Hide the animation after it has played once or after a set time.
  // This example hides it after 3 seconds.
  setTimeout(() => {
      document.getElementById('lottie-animation').style.display = 'none';
  }, 3000);
document.addEventListener('DOMContentLoaded', function() {
    const rotatingTextElement = document.querySelector('.rotating-text');
    const texts = ["Join Us", "Connect", "Learn", "Have fun", "Play Basketball", "Be happy", "unleash the power within"];
    let currentIndex = 0;

    function updateText() {
        rotatingTextElement.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }

    function scaleTextIn() {
        rotatingTextElement.style.transform = 'scale(1.2)';
        setTimeout(scaleTextOut, 1000);
    }

    function scaleTextOut() {
        rotatingTextElement.style.transform = 'scale(1)';
        setTimeout(() => {
            updateText();
            scaleTextIn();
        }, 1000);
    }

    scaleTextIn();
});

// Sticky header
const header = document.querySelector('header.hero');
let sticky = header.offsetTop;

window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
