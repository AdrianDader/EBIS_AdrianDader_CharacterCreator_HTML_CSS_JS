"use strict";
const createName = document.getElementById("createName");
const createSurname = document.getElementById("createSurname");
const createJob = document.getElementById("createJob");
const createDate = document.getElementById("createDate");
const createHeight = document.getElementById("createHeight");
const createWeight = document.getElementById("createWeight");
const createDescription = document.getElementById("createDescription");
let createImg = "";
const createHair = document.getElementById("createHair");
const createGender = document.getElementById("createGender");
function printApiRequestGender(hair, gender) {
    const hairOptions = hair
        .map((element) => `<option value="${element}">${element}</option>`)
        .join("");
    const genderOptions = gender
        .map((element) => `<option value="${element}">${element}</option>`)
        .join("");
    if (createHair)
        createHair.innerHTML += hairOptions;
    if (createGender)
        createGender.innerHTML += genderOptions;
}
const createBtn = document.getElementById("createBtn");
const form1 = document.getElementById("createForm1");
const form2 = document.getElementById("createForm2");
const containerCard = document.getElementById("containerCard");
fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=80")
    .then((res) => res.json())
    .then((datos) => {
    obtenerValoresUnicos(datos);
})
    .catch((error) => {
    console.error("Error al obtener los datos de la API:", error);
});
function obtenerValoresUnicos(personajes) {
    const uniqueHair = new Set();
    const uniqueGender = new Set();
    personajes.forEach((character) => {
        if (character.hair)
            uniqueHair.add(character.hair);
        if (character.gender)
            uniqueGender.add(character.gender);
    });
    const hairArray = [...uniqueHair];
    const genderArray = [...uniqueGender];
    console.log("Unique Hair Types:", hairArray);
    console.log("Unique Genders:", genderArray);
    printSelectOptions("createHair", hairArray);
    printSelectOptions("createGender", genderArray);
}
function printSelectOptions(selectId, values) {
    const selectElement = document.getElementById(selectId);
    if (!selectElement) {
        console.error(`No se encontró el elemento select con id: ${selectId}`);
        return;
    }
    selectElement.innerHTML =
        '<option value="" disabled selected>Selecciona una opción</option>';
    values.forEach((value) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    });
}
function printCard(nombre, apellido, trabajo, nacimiento, altura, peso, descripcion, imagen) {
    return `
        <div class="card__wrapper">
            <div class="info__wrapper">
                <img src="./../content/img/avatars/${imagen}.jpg" alt="" class="card__basic-img">
                <div class="card__basic-text">
                    <div class="basic-text__wrapper">
                        <p class="basic-text__title">Nombre completo:</p>
                        <p class="basic-text__info">${nombre} ${apellido}</p>
                    </div>
                    <div class="basic-text__wrapper">
                        <p class="basic-text__title">Fecha de nacimiento:</p>
                        <p class="basic-text__info">${nacimiento}</p>
                    </div>
                    <div class="basic-text__wrapper">
                        <p class="basic-text__title">Profesión:</p>
                        <p class="basic-text__info">${trabajo}</p>
                    </div>
                </div>
            </div>
            <div class="description__wrapper">
                <p class="basic-text__title">Mi historia:</p>
                <p class="basic-text__description">${descripcion}</p>
                <p class="basic-text__description">Por cierto, no lo comenté antes pero mido ${altura}cm y peso ${peso}kg.</p>
            </div>
            <button id="generatedClearBtn" type="button" class="btn__card btn btn__grey btn__max-width" aria-label="Generar nuevo personaje.">
                Generar de nuevo
            </button>
        </div>
    `;
}
console.log(form2.checkValidity());
createBtn.addEventListener("click", () => {
    console.log(form2.checkValidity());
    const newDate = new Date(createDate.value);
    const convertirDate = newDate.toLocaleDateString();
    console.log(convertirDate);
    if (!form1.checkValidity() || !form2.checkValidity()) {
        containerCard.innerHTML = `<div class="card__wrapper">
            <div class="info__wrapper" style="display: flex; justify-content: center;">
            <div class="card__basic-text">
                <div class="basic-text__wrapper" style="text-align: center; ">
                    <p class="basic-text__title">Lo siento</p>
                    <p class="basic-text__info">Debes rellenar todos los campos.</p>
                </div>
        </div>
        </div>
            <button id="generatedClearBtn" type="button" class="btn__card btn btn__grey btn__max-width" aria-label="Generar nuevo personaje.">
                Generar de nuevo
            </button>
        </div>`;
        const generatedClearBtn = document.getElementById("generatedClearBtn");
        generatedClearBtn === null || generatedClearBtn === void 0 ? void 0 : generatedClearBtn.addEventListener("click", () => {
            form1.reset();
            form2.reset();
            containerCard.innerHTML = "";
        });
        return;
    }
    console.log(createHair.selectedIndex);
    console.log(createGender.selectedIndex);
    if (createGender.selectedIndex === 1 || createGender.selectedIndex === 4) {
        createImg = "female0" + createHair.selectedIndex;
    }
    else if (createGender.selectedIndex === 2 ||
        createGender.selectedIndex === 3) {
        createImg = "male0" + createHair.selectedIndex;
    }
    containerCard.innerHTML = printCard(createName.value, createSurname.value, createJob.value, convertirDate, createHeight.valueAsNumber, createWeight.valueAsNumber, createDescription.value, createImg);
    const generatedClearBtn = document.getElementById("generatedClearBtn");
    generatedClearBtn === null || generatedClearBtn === void 0 ? void 0 : generatedClearBtn.addEventListener("click", () => {
        form1.reset();
        form2.reset();
        containerCard.innerHTML = "";
    });
});
const outputNameSurname = document.getElementById("outputNameSurname");
createSurname.addEventListener("input", () => {
    outputNameSurname.textContent = createName.value + " " + createSurname.value;
});
