function mostrarMensaje(){
    alert(
        "La cultura gótica mezcla arte, música, literatura y expresión emocional."
    );
}

function cambiarTema(){
    document.body.classList.toggle("tema-claro");
    const esClaro = document.body.classList.contains("tema-claro");
    localStorage.setItem("tema", esClaro ? "claro" : "oscuro");
}

// Guardar preferencia del tema
document.addEventListener("DOMContentLoaded", () => {
    const temaSaved = localStorage.getItem("tema");
    if (temaSaved === "claro") {
        document.body.classList.add("tema-claro");
    }
});

function validarFormulario(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre && email && mensaje) {
        alert("¡Mensaje enviado correctamente! (Simulado)");
        document.getElementById("formulario").reset();
    } else {
        alert("Por favor completa todos los campos.");
    }
}