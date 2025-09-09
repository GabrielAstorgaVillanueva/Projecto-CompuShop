// === Accesibilidad: Cambio de tema ===
function aplicarTema(tema) {
    document.body.classList.remove('tema-default', 'tema-claro', 'tema-oscuro');
    document.body.classList.add('tema-' + tema);
    localStorage.setItem('tema', tema);
}

function alternarTema() {
    const actual = localStorage.getItem('tema') || 'default';
    let siguiente = 'claro';
    if (actual === 'default') siguiente = 'claro';
    else if (actual === 'claro') siguiente = 'oscuro';
    else if (actual === 'oscuro') siguiente = 'default';
    aplicarTema(siguiente);
}

document.addEventListener('DOMContentLoaded', function() {
    const temaGuardado = localStorage.getItem('tema') || 'default';
    aplicarTema(temaGuardado);
    const btnTema = document.getElementById('btn-tema');
    if (btnTema) {
        btnTema.addEventListener('click', alternarTema);
    }
});
// Funciones globales para TechNova Store
// Comentarios en español y código organizado

// Actualiza el contador del carrito desde localStorage
function actualizarContadorCarrito() {
    const contador = document.getElementById('contador-carrito');
    if (!contador) return;
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    contador.textContent = carrito.length;
}

// Agrega producto al carrito (simulado)
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('boton-agregar-carrito')) {
        const id = e.target.getAttribute('data-id');
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(id);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContadorCarrito();
        mostrarToast('Producto agregado al carrito');
    }
});

// Muestra un mensaje temporal (toast)
function mostrarToast(mensaje) {
    const toast = document.createElement('div');
    toast.className = 'toast position-fixed bottom-0 end-0 m-3 bg-primary text-white p-3 rounded shadow';
    toast.textContent = mensaje;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// Validación de formularios
(function() {
    'use strict';
    const forms = document.querySelectorAll('form');
    Array.from(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

// Actualizar contador al cargar la página
document.addEventListener('DOMContentLoaded', actualizarContadorCarrito);

// Simulación de redirección en enlaces (ejemplo)
document.querySelectorAll('a').forEach(function(enlace) {
    enlace.addEventListener('click', function(e) {
        const href = enlace.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('mailto:')) {
            // window.location.href = href; // Descomentar para simular redirección
        }
    });
});
