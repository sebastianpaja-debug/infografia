/* ============================================
   Infografia Academica — Gestion de Archivos
   Script: animacion fade-in
   ============================================ */

(function () {
  "use strict";

  function initFadeIn() {
    var elementos = document.querySelectorAll(".seccion");

    if (!("IntersectionObserver" in window)) {
      elementos.forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }

    var opciones = {
      root: null,
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.15
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, opciones);

    elementos.forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFadeIn);
  } else {
    initFadeIn();
  }
})();
