// Fuktion som åbner og lukker mobil overlay menuen
function mobileMenu() {

  //Finder #mobile_overlay og body i HTML og gemmer dem som variabler
  let menu = document.querySelector("#mobile_overlay");
  let body = document.querySelector("body");

  // Checker om #mobile_overlay har en width på 100% eller 0
  if (menu.style.width === "100%") {

    // Hvis #mobile_overlay har en width på 100%, sættes dens width til 0 og body får overflow = "visible"
    menu.style.width = "0";
    body.style.overflow = "visible";
  } else {

    // Hvis #mobile_overlay har en width på 0, sættes dens width til 100% og body får overflow = "hidden"
    menu.style.width = "100%";
    body.style.overflow = "hidden";
  }
}