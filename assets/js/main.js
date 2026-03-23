document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // ✅ MOBILE MENU
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // ✅ ONLY TARGET MAIN DROPDOWN BUTTON
  const dropdownToggle = document.querySelectorAll(".dropdown-toggle");

  dropdownToggle.forEach(toggle => {
    toggle.addEventListener("click", function (e) {

      if (window.innerWidth <= 992) {
        e.preventDefault(); // stop only main link

        const parent = this.parentElement;

        // Close others
        document.querySelectorAll(".dropdown").forEach(d => {
          if (d !== parent) {
            d.classList.remove("active");
          }
        });

        // Toggle current
        parent.classList.toggle("active");
      }

    });
  });

});