"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");
    const rejectButton = document.getElementById("reject-cookies");
    rejectButton.addEventListener("click", () => {
        banner.style.display = "none";
    });
    if (localStorage.getItem("cookiesAccepted")) {
        banner.style.display = "none";
    }
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        banner.style.display = "none";
    });
});
