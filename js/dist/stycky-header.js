document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("headerPrincipal");
  const headerTexts = document.getElementById("headerPrincipalText")

  const menuComoFunciona = document.getElementById("menuComoFunciona")
  const menuFAQ = document.getElementById("menuFAQ")
  const menuQuienesSomos = document.getElementById("menuQuienesSomos")
  const menuContact = document.getElementById("menuContact")


  window.addEventListener("scroll", function () {
      if (window.scrollY > 50) { // Detecta si el usuario hizo scroll más de 50px
          header.classList.add("header-scrolled");
          headerTexts.classList.add("header-scrolled__text")

          menuComoFunciona.classList.add("header-scrolled__text")
          menuFAQ.classList.add("header-scrolled__text")
          menuQuienesSomos.classList.add("header-scrolled__text")
          menuContact.classList.add("header-scrolled__text")
      } else {
          header.classList.remove("header-scrolled");
          headerTexts.classList.remove("header-scrolled__text")

          menuComoFunciona.classList.remove("header-scrolled__text")
          menuFAQ.classList.remove("header-scrolled__text")
          menuQuienesSomos.classList.remove("header-scrolled__text")
          menuContact.classList.remove("header-scrolled__text")

      }
  });
});
