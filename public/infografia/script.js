/* ============================================
   Infografia Academica — Gestion de Archivos
   Script: carga de secciones + animacion fade-in
   ============================================ */

(function () {
  "use strict";

  /* --- Lista de secciones a cargar --- */
  var secciones = [
    { id: "seccion-1", archivo: "secciones/seccion-1-encabezado.html" },
    { id: "seccion-2", archivo: "secciones/seccion-2-definicion.html" },
    { id: "seccion-3", archivo: "secciones/seccion-3-funciones.html" },
    { id: "seccion-4", archivo: "secciones/seccion-4-estructura.html" },
    { id: "seccion-5", archivo: "secciones/seccion-5-metodos.html" },
    { id: "seccion-6", archivo: "secciones/seccion-6-tipos.html" },
    { id: "seccion-7", archivo: "secciones/seccion-7-etico.html" }
  ];

  /* --- Cargar un archivo HTML y volcarlo en su contenedor --- */
  function cargarSeccion(seccion) {
    return fetch(seccion.archivo)
      .then(function (resp) {
        if (!resp.ok) {
          throw new Error("No se pudo cargar " + seccion.archivo);
        }
        return resp.text();
      })
      .then(function (html) {
        var contenedor = document.getElementById(seccion.id);
        if (contenedor) {
          contenedor.innerHTML = html;
        }
      });
  }

  /* --- Animacion fade-in al hacer scroll --- */
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

  /* --- Cargar todas las secciones en paralelo, luego iniciar animaciones --- */
  function init() {
    var promesas = secciones.map(function (s) {
      return cargarSeccion(s);
    });

    Promise.all(promesas)
      .then(function () {
        initFadeIn();
      })
      .catch(function (err) {
        console.error("Error cargando secciones:", err);
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
