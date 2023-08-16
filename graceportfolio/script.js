document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const navList = document.querySelector(".nav-list");
  const overlay = document.querySelector(".overlay");
  const navLinks = document.querySelectorAll(".nav-list a"); // Select all navigation links

  menuIcon.addEventListener("click", function () {
    navList.classList.toggle("active");
    closeIcon.style.display = navList.classList.contains("active") ? "block" : "none";
    overlay.style.display = navList.classList.contains("active") ? "block" : "none";
    document.body.style.overflow = navList.classList.contains("active") ? "hidden" : "auto"; // Prevent scrolling when active
  });

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navList.classList.remove("active");
      closeIcon.style.display = "none";
      overlay.style.display = "none";
      document.body.style.overflow = "auto"; // Restore scrolling
    });
  });

  closeIcon.addEventListener("click", function () {
    navList.classList.remove("active");
    closeIcon.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
  });
});
