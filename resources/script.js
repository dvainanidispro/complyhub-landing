/* ===================================================================
   ComplyHub Landing Page - script.js
   =================================================================== */
(function () {
  "use strict";

  /* ---------- Header: σκίαση κατά το scroll ---------- */
  var header = document.getElementById("siteHeader");

  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 10);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile μενού ---------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");

  function closeNav() {
    mainNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Άνοιγμα μενού");
  }

  navToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού");
  });

  // Κλείσιμο του μενού όταν επιλεγεί σύνδεσμος
  mainNav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      closeNav();
    }
  });

  // Κλείσιμο με Escape
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && mainNav.classList.contains("open")) {
      closeNav();
      navToggle.focus();
    }
  });

  /* ---------- Εμφάνιση στοιχείων κατά το scroll ---------- */
  var revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* ---------- Τρέχον έτος στο copyright ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
