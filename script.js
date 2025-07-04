// Future enhancement: dark mode toggle or animations!
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Toggle Dark Mode";
toggleBtn.style.margin = "10px";
toggleBtn.onclick = () => {
  document.body.classList.toggle("dark-mode");
};
document.body.prepend(toggleBtn);
