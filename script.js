function sayHello() {
  document.getElementById("message").innerText =
    "Thanks for visiting my portfolio!";
    function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function sayHello() {
  document.getElementById("message").innerText =
    "Thanks for visiting my portfolio!";
}
}
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "☀️ Light Mode";
  } else {
    toggleBtn.innerText = "🌙 Dark Mode";
  }
});