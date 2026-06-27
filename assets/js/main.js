/* ============================================================
   Mala Hiša — Template interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var mobileNav = document.getElementById("mobile-nav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close menu after tapping a link
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Reveal-on-scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Current year in footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* ---- Sensible default dates on the booking bar ---- */
  var checkIn = document.getElementById("check-in");
  var checkOut = document.getElementById("check-out");
  if (checkIn && checkOut) {
    var today = new Date();
    var tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
    var iso = function (d) { return d.toISOString().split("T")[0]; };
    checkIn.min = iso(today);
    checkOut.min = iso(tomorrow);
    checkIn.addEventListener("change", function () {
      var next = new Date(checkIn.value); next.setDate(next.getDate() + 1);
      checkOut.min = iso(next);
      if (checkOut.value && checkOut.value <= checkIn.value) {
        checkOut.value = iso(next);
      }
    });
  }

  /* ---- Forward "Check Availability" to Booking.com with the chosen dates ---- */
  var bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var base = bookingForm.getAttribute("data-booking-url");
      var params = [];
      if (checkIn && checkIn.value) { params.push("checkin=" + checkIn.value); }
      if (checkOut && checkOut.value) { params.push("checkout=" + checkOut.value); }
      var guests = document.getElementById("guests");
      if (guests && guests.value) { params.push("group_adults=" + guests.value); }
      var url = params.length ? base + "?" + params.join("&") : base;
      window.open(url, "_blank", "noopener");
    });
  }
})();
