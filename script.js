// Manejo del Splash Screen (Pantalla de carga)
window.addEventListener('load', function () {
    setTimeout(function () {
        const splash = document.getElementById('splash');
        if (splash) {
            splash.classList.add('ocultar');
        }
    }, 2400); // Se oculta tras 2.4 segundos
});

// --- LÓGICA DE WHATSAPP MEJORADA ---
document.getElementById('btnWhatsapp').addEventListener('click', function() {
    // 1. Solo capturamos el nombre y el terreno de interés
    const nombre = document.querySelector('input[name="nombre"]').value;
    const mensajeExtra = document.querySelector('textarea[name="mensaje"]').value;

    // 2. Validación rápida
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    // 3. Tu número de WhatsApp
    const miNumero = "51924451087"; 

    // 4. Creamos un mensaje tipo "Lead" profesional
    // Usamos saltos de línea (%0A) para que el mensaje se vea ordenado
    let textoFinal = `Hola, mi nombre es *${nombre}* y vi su web *TierrasEnChancay*.`;
    
    if (mensajeExtra !== "") {
        textoFinal += `Consulta adicional: ${mensajeExtra}`;
    }

    // 5. Abrimos WhatsApp
    const url = `https://wa.me/${miNumero}?text=${encodeURIComponent(textoFinal)}`;
    window.open(url, '_blank');
});

// --- CORRECCIÓN PARA EL ENVÍO POR CORREO ---
document.getElementById('miFormulario').addEventListener('submit', function(e) {
    const nombre = document.querySelector('input[name="nombre"]').value;
    const telefono = document.querySelector('input[name="telefono"]').value;
    const regexPerú = /^9\d{8}$/;
    
    // Validamos el teléfono antes de dejar que Formspree actúe
    if (!regexPerú.test(telefono.replace(/\s/g, ""))) {
        e.preventDefault(); // Solo detenemos si hay error en el número
        alert("Por favor, ingresa un número de celular válido (9 dígitos).");
    } else {
        // NO ponemos e.preventDefault() aquí. 
        // Dejamos que el formulario siga su camino natural a Formspree.
        alert(`¡Perfecto ${nombre}! Ahora te redirigiremos para confirmar el envío de tu correo.`);
    }
});