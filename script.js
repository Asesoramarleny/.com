window.addEventListener('load', function () {
    setTimeout(function () {
        const splash = document.getElementById('splash');
        if (splash) {
            splash.classList.add('ocultar');
        }
    }, 1500); 
});

document.getElementById('btnWhatsapp').addEventListener('click', function() {
    const nombre = document.querySelector('input[name="nombre"]').value;
    const mensajeExtra = document.querySelector('textarea[name="mensaje"]').value;

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    const miNumero = "51924451087"; 

    let textoFinal = `Hola, mi nombre es *${nombre}* y vi su web *TierrasEnChancay*.`;
    
    if (mensajeExtra !== "") {
        textoFinal += `Consulta adicional: ${mensajeExtra}`;
    }

    const url = `https://wa.me/${miNumero}?text=${encodeURIComponent(textoFinal)}`;
    window.open(url, '_blank');
});

document.getElementById('miFormulario').addEventListener('submit', function(e) {
    const nombre = document.querySelector('input[name="nombre"]').value;
    const telefono = document.querySelector('input[name="telefono"]').value;
    const regexPerú = /^9\d{8}$/;
    
    if (!regexPerú.test(telefono.replace(/\s/g, ""))) {
        e.preventDefault(); 
        alert("Por favor, ingresa un número de celular válido (9 dígitos).");
    } else {
        alert(`¡Perfecto ${nombre}! Ahora te redirigiremos para confirmar el envío de tu correo.`);
    }
});
