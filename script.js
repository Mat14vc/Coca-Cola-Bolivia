// ── SPA: navegación entre secciones ──────────────────────
const links = document.querySelectorAll(".nav-link");
const secciones = document.querySelectorAll(".seccion");

function mostrarSeccion(id) {
    secciones.forEach(s => s.classList.remove("activa"));
    links.forEach(l => l.classList.remove("activo"));

    document.getElementById(id).classList.add("activa");
    document.querySelector(`.nav-link[data-seccion="${id}"]`).classList.add("activo");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        mostrarSeccion(this.dataset.seccion);
    });
});

// Botón "Ver Productos" del hero
const btnHero = document.querySelector(".btn-hero");
if (btnHero) {
    btnHero.addEventListener("click", function() {
        mostrarSeccion(this.dataset.seccion);
    });
}

// ── Modal de ofertas ──────────────────────────────────────
const botones   = document.querySelectorAll(".btn-oferta");
const overlay   = document.getElementById("modalOverlay");
const modalTexto = document.getElementById("modalTexto");
const modalCerrar = document.getElementById("modalCerrar");

botones.forEach(boton => {
    boton.addEventListener("click", function() {
        modalTexto.textContent = this.dataset.oferta;
        overlay.classList.add("activo");
    });
});

modalCerrar.addEventListener("click", () => overlay.classList.remove("activo"));
overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.classList.remove("activo");
});

// ── Formulario de contacto ────────────────────────────────
const form = document.querySelector(".form-contacto");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ ¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
    form.reset();
});