const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const menuLinks = document.querySelectorAll(".menu a");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.88;

  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;

    if (top < trigger) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);