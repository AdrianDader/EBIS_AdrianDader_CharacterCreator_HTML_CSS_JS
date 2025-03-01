// Obtener el contenedor donde se insertarán las tarjetas
const peopleContainer = document.getElementById(
  "peopleContainer"
) as HTMLDivElement;

// Petición a la API
fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=18")
  .then((res) => res.json())
  .then((datos) => {
    obtenerValoresUnicosWhoWeAre(datos);
  })
  .catch((error) => {
    console.error("Error al obtener los datos de la API:", error);
  });

// Función para obtener valores únicos de ocupación y nombre
function obtenerValoresUnicosWhoWeAre(personajes: any[]): void {
  const uniqueOccupation = new Map<string, { count: number; name: string }>();

  // Recorremos los datos de los personajes
  personajes.forEach((character) => {
    if (character.occupation) {
      if (uniqueOccupation.has(character.occupation)) {
        uniqueOccupation.get(character.occupation)!.count += 1;
      } else {
        uniqueOccupation.set(character.occupation, {
          count: 1,
          name: character.name,
        });
      }
    }
  });

  // Convertir el Map en un array de entradas [ocupacion, { count, name }]
  const occupationArray = [...uniqueOccupation.entries()];

  console.log("Unique Occupations:", occupationArray);

  occupationArray.forEach(([ocupacion, data], index) => {
    const { name } = data;

    const cardHTML = printCardWhoWeAre(
      (index % 9) + 1 + "", // Generar dinámicamente el número de la imagen (1-9)
      name,
      ocupacion,
      "facebook",
      "twitter",
      "instagram"
    );

    peopleContainer.innerHTML += cardHTML;
  });
}

// Función para generar la tarjeta con imágenes locales
function printCardWhoWeAre(
  imagenIndex: string,
  nombre: string,
  ocupacion: string,
  socialNetwork1: string,
  socialNetwork2: string,
  socialNetwork3: string
): string {
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
