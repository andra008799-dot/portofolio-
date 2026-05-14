// Smooth reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(
  ".skill-card, .feature-card, .timeline-item, .contact-card"
).forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Navbar glow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(0, 0, 0, 0.65)";
    header.style.boxShadow = "0 10px 40px rgba(0,255,136,0.08)";
  } else {
    header.style.background = "rgba(0, 0, 0, 0.3)";
    header.style.boxShadow = "none";
  }
});

// Typing effect
const heroName = document.querySelector(".hero h1");

if (heroName) {
  const original = heroName.innerHTML;
  heroName.innerHTML = "";

  let i = 0;

  function typeWriter() {
    if (i < original.length) {
      heroName.innerHTML += original.charAt(i);
      i++;
      setTimeout(typeWriter, 35);
    }
  }

  setTimeout(typeWriter, 500);
}
