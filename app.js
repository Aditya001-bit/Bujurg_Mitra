// Smooth scroll on all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Button Ripple Effect
document.querySelectorAll('.explore-btn').forEach(button => {
  button.addEventListener('click', function (e) {
    let ripple = document.createElement('span');
    ripple.classList.add('ripple');
    this.appendChild(ripple);

    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
