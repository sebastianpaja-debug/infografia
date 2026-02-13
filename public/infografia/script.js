/* ============================================
   Infografia Academica — Gestion de Archivos
   Script: carga de contenido + animacion fade-in
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

  function cargarContenido() {
    var contenedor = document.getElementById("contenido-dinamico");

    return fetch("contenido-infografia.html")
      .then(function (resp) {
        if (!resp.ok) {
          throw new Error("No se pudo cargar contenido-infografia.html");
        }
        return resp.text();
      })
      .then(function (html) {
        contenedor.innerHTML = html;
        initFadeIn();
      })
      .catch(function (error) {
        console.error(error);
        contenedor.innerHTML = "<p class=\"cargando\">Error al cargar la infografía.</p>";
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cargarContenido);
  } else {
    cargarContenido();
  }
})();
