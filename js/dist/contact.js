"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const contactName = document.getElementById("contactName");
    const contactSurname = document.getElementById("contactSurname");
    const contactEmail = document.getElementById("contactEmail");
    const contactMensaje = document.getElementById("contactMensaje");
    const contactBtn = document.getElementById("contactBtn");
    const popup = document.getElementById("contactPopup");
    const popupName = document.getElementById("popupName");
    const popupSurname = document.getElementById("popupSurname");
    const popupEmail = document.getElementById("popupEmail");
    const popupMensaje = document.getElementById("popupMensaje");
    const popupBtn = document.getElementById("popupBtn");
    contactBtn.addEventListener("click", () => {
        const contactData = {
            name: contactName.value.trim(),
            surname: contactSurname.value.trim(),
            email: contactEmail.value.trim(),
            mensaje: contactMensaje.value.trim()
        };
        if (!contactData.name || !contactData.surname || !contactData.email || !contactData.mensaje) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        popupName.textContent = contactData.name;
        popupSurname.textContent = contactData.surname;
        popupEmail.textContent = contactData.email;
        popupMensaje.textContent = contactData.mensaje;
        popup.classList.add("show");
    });
    popupBtn.addEventListener("click", () => {
        popup.classList.remove("show");
    });
});
