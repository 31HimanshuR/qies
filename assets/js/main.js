document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // ===== MOBILE MENU TOGGLE =====
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // ===== DROPDOWN FIX (CORRECT VERSION) =====
  const dropdownToggles = document.querySelectorAll(".dropdown > a");

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", function (e) {

      // Only apply on mobile
      if (window.innerWidth <= 992) {
        e.preventDefault(); // stop navigation ONLY for parent

        const parent = this.parentElement;

        // Close other dropdowns (optional but professional)
        document.querySelectorAll(".dropdown").forEach(d => {
          if (d !== parent) {
            d.classList.remove("active");
          }
        });

        // Toggle current dropdown
        parent.classList.toggle("active");
      }

    });
  });

});