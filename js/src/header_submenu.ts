
//* visible submenu header
document.addEventListener("DOMContentLoaded" , ()=>{

//* llamar a los ID
    const headerMenuItem = document.getElementById("menuComoFunciona") as HTMLDListElement
    const headerSubMenu = document.getElementById("submenuList") as HTMLDivElement


    headerMenuItem.addEventListener("click", (event)=>{
        event.stopPropagation()

        if(headerSubMenu.style.display === "block") {
            headerSubMenu.style.display = "none"
        } else {
            headerSubMenu.style.display = "block"
        }
    })


})