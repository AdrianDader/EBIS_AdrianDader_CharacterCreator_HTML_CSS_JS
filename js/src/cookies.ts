document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner") as HTMLTableSectionElement
    const acceptButton = document.getElementById("accept-cookies") as HTMLButtonElement
    const rejectButton = document.getElementById("reject-cookies") as HTMLButtonElement
    // cerrar ventana 
    rejectButton.addEventListener("click", ()=>{
        banner.style.display = "none"
    } )

    // Verifica si ya se ha aceptado
    if (localStorage.getItem("cookiesAccepted")) {
        banner.style.display = "none";
    }

    // Si se acepta, oculta el banner y guarda la preferencia
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        banner.style.display = "none";
    });
});
