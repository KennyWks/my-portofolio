const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const navbarMenu = document.querySelectorAll(".navbar-menu");
for (let i = 0; i < navbarMenu.length; i++) {
  navbarMenu[i].addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const elementHref = document.querySelector(`${href}`);
    window.scrollTo({ top: elementHref.offsetTop - 60, behavior: "smooth" });
  });
}
