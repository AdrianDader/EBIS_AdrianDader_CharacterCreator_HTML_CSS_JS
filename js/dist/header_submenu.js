"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const headerMenuItem = document.getElementById("menuComoFunciona");
    const headerSubMenu = document.getElementById("submenuList");
    headerMenuItem.addEventListener("click", (event) => {
        event.stopPropagation();
        if (headerSubMenu.style.display === "block") {
            headerSubMenu.style.display = "none";
        }
        else {
            headerSubMenu.style.display = "block";
        }
    });
});
