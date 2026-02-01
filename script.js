// Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.innerText = "☀️ Light Mode";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.innerText = "☀️ Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.innerText = "🌙 Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
}