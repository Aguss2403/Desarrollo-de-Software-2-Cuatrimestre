document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logout");
  const navButton = document.getElementById("navButton");
  const nav = document.querySelector("nav");

  logoutButton.addEventListener("click", () => {
    window.location.href = "login.html";
  });

  navButton.addEventListener("click", () => {
    nav.classList.toggle("navVisible");
  });
});
