"use strict";
const portadaPhotos = document.getElementById("portadaPhoto");
function printImages(img1, img2, img3, randomNumber1, randomNumber2) {
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
          </div>`;
}
const randomNumberPar1 = Math.ceil(Math.random() * 11);
const randomNumberPar2 = Math.ceil(Math.random() * 11);
const convertirRandom1 = String(randomNumberPar1);
const convertirRandom2 = String(randomNumberPar2);
let imgName1 = "";
let imgName2 = "";
let imgName3 = "";
if (randomNumberPar1 % 2 === 0) {
    imgName1 = "female0";
    imgName2 = "male0";
    imgName3 = "female0";
}
else {
    imgName1 = "male0";
    imgName2 = "female0";
    imgName3 = "male0";
}
portadaPhotos.innerHTML = printImages(imgName1, imgName2, imgName3, convertirRandom1, convertirRandom2);
