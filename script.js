document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Formulario enviado correctamente");
    });
});
