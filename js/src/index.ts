// random fotos portada --------------------------------------

// obtener id padre
const portadaPhotos = document.getElementById("portadaPhoto") as HTMLDivElement

// funcion print
function printImages(img1:string, img2:string, img3:string, randomNumber1:string, randomNumber2:string):string {

    return `<div class="portada-photo__wrapper">
            <img
              id="portadaImg1"
              src="./content/img/avatars/${img1}${randomNumber1}.jpg"
              alt="Character Creator Avatar"
              class="portada-photo"
            />
            <img
              id="portadaImg2"
              src="./content/img/avatars/${img2}${randomNumber1}.jpg"
              alt="Character Creator Avatar"
              class="portada-photo"
            />
            <img
              id="portadaImg3"
              src="./content/img/avatars/${img3}${randomNumber2}.jpg"
              alt="Character Creator Avatar"
              class="portada-photo"
            />
          </div>`    
          
}

// obtener variables para generar fotos random
const randomNumberPar1:number = Math.ceil(Math.random()*11) // numero random del 1 al 11
const randomNumberPar2:number = Math.ceil(Math.random()*11) // numero random del 1 al 11
const convertirRandom1:string = String(randomNumberPar1)
const convertirRandom2:string = String(randomNumberPar2)

let imgName1:string = ""
let imgName2:string = ""
let imgName3:string = ""


if(randomNumberPar1%2===0) {
    imgName1 = "female0"
    imgName2 = "male0"
    imgName3 = "female0"
} else {
    imgName1 = "male0"
    imgName2 = "female0"
    imgName3 = "male0"
}


portadaPhotos.innerHTML = printImages(imgName1, imgName2, imgName3, convertirRandom1, convertirRandom2)
