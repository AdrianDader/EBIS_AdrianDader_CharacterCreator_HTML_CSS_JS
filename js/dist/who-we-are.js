"use strict";
const peopleContainer = document.getElementById("peopleContainer");
fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=18")
    .then((res) => res.json())
    .then((datos) => {
    obtenerValoresUnicosWhoWeAre(datos);
})
    .catch((error) => {
    console.error("Error al obtener los datos de la API:", error);
});
function obtenerValoresUnicosWhoWeAre(personajes) {
    const uniqueOccupation = new Map();
    personajes.forEach((character) => {
        if (character.occupation) {
            if (uniqueOccupation.has(character.occupation)) {
                uniqueOccupation.get(character.occupation).count += 1;
            }
            else {
                uniqueOccupation.set(character.occupation, {
                    count: 1,
                    name: character.name,
                });
            }
        }
    });
    const occupationArray = [...uniqueOccupation.entries()];
    console.log("Unique Occupations:", occupationArray);
    occupationArray.forEach(([ocupacion, data], index) => {
        const { name } = data;
        const cardHTML = printCardWhoWeAre((index % 9) + 1 + "", name, ocupacion, "facebook", "twitter", "instagram");
        peopleContainer.innerHTML += cardHTML;
    });
}
function printCardWhoWeAre(imagenIndex, nombre, ocupacion, socialNetwork1, socialNetwork2, socialNetwork3) {
    return `
        <div class="people-card">
            <img class="card-img" src="./../content/img/avatars/female0${imagenIndex}.jpg" alt="${nombre}">
            <div class="people-card__info">
                <h3 class="card-name__black">${nombre}</h3>
                <h4 class="card-job__orange">${ocupacion}</h4>
                <div class="social-network__wrapper">
                    <a href="#" class="fa fa-${socialNetwork1}"></a>
                    <a href="#" class="fa fa-${socialNetwork2}"></a>
                    <a href="#" class="fa fa-${socialNetwork3}"></a>
                </div>
            </div>
        </div>
    `;
}
