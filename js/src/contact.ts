document.addEventListener("DOMContentLoaded", () => {
// Obtener elementos del formulario
const contactName = document.getElementById("contactName") as HTMLInputElement;
const contactSurname = document.getElementById("contactSurname") as HTMLInputElement;
const contactEmail = document.getElementById("contactEmail") as HTMLInputElement;
const contactMensaje = document.getElementById("contactMensaje") as HTMLTextAreaElement;
const contactBtn = document.getElementById("contactBtn") as HTMLButtonElement;

// Obtener elementos del popup
const popup = document.getElementById("contactPopup") as HTMLElement;
const popupName = document.getElementById("popupName") as HTMLParagraphElement;
const popupSurname = document.getElementById("popupSurname") as HTMLParagraphElement;
const popupEmail = document.getElementById("popupEmail") as HTMLParagraphElement;
const popupMensaje = document.getElementById("popupMensaje") as HTMLParagraphElement;
const popupBtn = document.getElementById("popupBtn") as HTMLButtonElement;

// Evento de click en el botón "Enviar formulario"
contactBtn.addEventListener("click", () => {
        
        const contactData = {
            name: contactName.value.trim(),
            surname: contactSurname.value.trim(),
            email: contactEmail.value.trim(),
            mensaje: contactMensaje.value.trim()
        };

        // Validar que no haya campos vacíos
        if (!contactData.name || !contactData.surname || !contactData.email || !contactData.mensaje) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Insertar valores en el popup
        popupName.textContent = contactData.name;
        popupSurname.textContent = contactData.surname;
        popupEmail.textContent = contactData.email;
        popupMensaje.textContent = contactData.mensaje;

        // Mostrar popup con la clase "show"
        popup.classList.add("show");
    });

    // Evento para cerrar el popup
    popupBtn.addEventListener("click", () => {
        popup.classList.remove("show");
    });
});
