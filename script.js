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

// Opfanger hvis der bliver scrolled på siden.
window.addEventListener("scroll", () => {

  // Gemmer hvor lang man har scrollet ned som variablen "scroll", divideret med 1000 så det er et decimal tal
  let scroll = this.scrollY / 1000;

  // Dividere "scroll" med et decimal tal, så "scroll" bliver størrer og gemmer det som variablen "opacity"
  let opacity = scroll / 0.4;

  // Finder #background_darkener i HTML filen og gemmer den som en variable
  let background_darkener = document.querySelector("#background_darkener");

  // Opdatere alpha værdien for #background_darkener's baggrundsfarve til værdien gemt i "opacity". Det gør at baggrunds videoen bliver mere eller mindre synlig.
  background_darkener.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
})