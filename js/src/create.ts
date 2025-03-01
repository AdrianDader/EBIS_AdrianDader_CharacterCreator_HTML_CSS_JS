// Obtener valores de los inputs
const createName = document.getElementById("createName") as HTMLInputElement;
const createSurname = document.getElementById(
  "createSurname"
) as HTMLInputElement;
const createJob = document.getElementById("createJob") as HTMLInputElement;
const createDate = document.getElementById("createDate") as HTMLInputElement;

const createHeight = document.getElementById(
  "createHeight"
) as HTMLInputElement;
const createWeight = document.getElementById(
  "createWeight"
) as HTMLInputElement;
const createDescription = document.getElementById(
  "createDescription"
) as HTMLTextAreaElement;

let createImg: string = "";

//! Contenedores donde se imprimen los valores de la API
const createHair = document.getElementById("createHair") as HTMLSelectElement;
const createGender = document.getElementById(
  "createGender"
) as HTMLSelectElement;

function printApiRequestGender(hair: string[], gender: string[]): void {
  const hairOptions = hair
    .map((element) => `<option value="${element}">${element}</option>`)
    .join("");
  const genderOptions = gender
    .map((element) => `<option value="${element}">${element}</option>`)
    .join("");

  if (createHair) createHair.innerHTML += hairOptions;
  if (createGender) createGender.innerHTML += genderOptions;
}

// Obtener botones
const createBtn = document.getElementById("createBtn") as HTMLButtonElement;

// Obtener formularios
const form1 = document.getElementById("createForm1") as HTMLFormElement;
const form2 = document.getElementById("createForm2") as HTMLFormElement;

// Contenedor donde se imprimen las tarjetas
const containerCard = document.getElementById(
  "containerCard"
) as HTMLDivElement;

// peticion API ----------------------------------------------
fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=80")
  .then((res) => res.json())
  .then((datos) => {
    obtenerValoresUnicos(datos);
  })
  .catch((error) => {
    console.error("Error al obtener los datos de la API:", error);
  });

// Función para obtener y mostrar los valores únicos de hair y gender
function obtenerValoresUnicos(personajes: any[]): void {
  const uniqueHair = new Set<string>();
  const uniqueGender = new Set<string>();

  // Recorremos los datos de los personajes
  personajes.forEach((character) => {
    if (character.hair) uniqueHair.add(character.hair)
    if (character.gender) uniqueGender.add(character.gender)
  });

  // Convertir los sets en arrays
  const hairArray = [...uniqueHair];
  const genderArray = [...uniqueGender];

  // Mostrar los resultados en consola
  console.log("Unique Hair Types:", hairArray);
  console.log("Unique Genders:", genderArray);

  // Llamar a la función que pinta los valores en el formulario
  printSelectOptions("createHair", hairArray);
  printSelectOptions("createGender", genderArray);
}

// Función para pintar los valores en los selects
function printSelectOptions(selectId: string, values: string[]): void {
  const selectElement = document.getElementById(selectId) as HTMLSelectElement;

  if (!selectElement) {
    console.error(`No se encontró el elemento select con id: ${selectId}`);
    return;
  }

  // Limpiar opciones anteriores (excepto la primera)
  selectElement.innerHTML =
    '<option value="" disabled selected>Selecciona una opción</option>';

  // Agregar las opciones nuevas
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectElement.appendChild(option);
  });
}

// Función para generar la tarjeta
function printCard(
  nombre: string,
  apellido: string,
  trabajo: string,
  nacimiento: string,
  altura: number,
  peso: number,
  descripcion: string,
  imagen: string
): string {
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

// Evento para generar la tarjeta
createBtn.addEventListener("click", () => {
  console.log(form2.checkValidity());

  const newDate = new Date(createDate.value);
  const convertirDate = newDate.toLocaleDateString();
  console.log(convertirDate);

  // Insertar la tarjeta en el contenedor

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

    // Seleccionar el botón generado dinámicamente
    const generatedClearBtn = document.getElementById(
      "generatedClearBtn"
    ) as HTMLButtonElement;

    // Evento para limpiar los inputs y eliminar la tarjeta
    generatedClearBtn?.addEventListener("click", () => {
      form1.reset();
      form2.reset();
      containerCard.innerHTML = "";
    });

    return;
  }

  // obtener foto

  console.log(createHair.selectedIndex);
  console.log(createGender.selectedIndex);

  if (createGender.selectedIndex === 1 || createGender.selectedIndex === 4) {
    createImg = "female0" + createHair.selectedIndex;
  } else if (
    createGender.selectedIndex === 2 ||
    createGender.selectedIndex === 3
  ) {
    createImg = "male0" + createHair.selectedIndex;
  }

  containerCard.innerHTML = printCard(
    createName.value,
    createSurname.value,
    createJob.value,
    convertirDate,
    createHeight.valueAsNumber,
    createWeight.valueAsNumber,
    createDescription.value,
    createImg
  );

  // Seleccionar el botón generado dinámicamente
  const generatedClearBtn = document.getElementById(
    "generatedClearBtn"
  ) as HTMLButtonElement;

  // Evento para limpiar los inputs y eliminar la tarjeta
  generatedClearBtn?.addEventListener("click", () => {
    form1.reset();
    form2.reset();
    containerCard.innerHTML = "";
  });
});

//cambiar nombre y apellido en descripción

const outputNameSurname = document.getElementById(
  "outputNameSurname"
) as HTMLInputElement;

createSurname.addEventListener("input", () => {
  outputNameSurname.textContent = createName.value + " " + createSurname.value;
});
