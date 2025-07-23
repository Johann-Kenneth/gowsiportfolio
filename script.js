// Typing animation
const typing = document.querySelector('.typing');
const phrases = ['Aspiring Product Marketer.', 'AI Enthusiast.', 'Lifelong Learner.'];
let index = 0, char = 0, isDeleting = false;

function type() {
  if (index >= phrases.length) index = 0;
  const current = phrases[index];
  typing.textContent = current.substring(0, char);
  if (!isDeleting && char < current.length) {
    char++;
    setTimeout(type, 100);
  } else if (isDeleting && char > 0) {
    char--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) index++;
    setTimeout(type, 1000);
  }
}
type();

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, options);

faders.forEach(fader => observer.observe(fader));
