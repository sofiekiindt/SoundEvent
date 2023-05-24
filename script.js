// Fuktion som åbner og lukker mobil overlay menuen, når man trykker på åben / luk knapperne
function mobileMenu() {

  //Her findes #mobile_overlay og body i HTML filen og de gemmes dem som variabler, så de let kan bruges senerer
  let menu = document.querySelector("#mobile_overlay");
  let body = document.querySelector("body");

  // Her checkes om #mobile_overlay har en width på 100%
  if (menu.style.width === "100%") {

    // Hvis #mobile_overlay har en width på 100%, sættes dens width til 0, hvilket for mobil menuen til at forsvinde, og body får overflow = "visible", hvilket gør at man kan scoll på siden
    menu.style.width = "0";
    body.style.overflow = "visible";
  } else {

    // Hvis #mobile_overlay har en width på 0, sættes dens width til 100%, hvilket for mobil menuen til at blive vist og body får overflow = "hidden", hvilket gør at man ikke kan scoll på siden
    menu.style.width = "100%";
    body.style.overflow = "hidden";
  }
}