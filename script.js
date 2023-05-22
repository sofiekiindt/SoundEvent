function mobileMenu() {
  let menu = document.querySelector("#mobile_overlay");
  let body = document.querySelector("body");
  if (menu.style.width === "100%") {
    menu.style.width = "0";
    body.style.overflow = "visible";
  } else {
    menu.style.width = "100%";
    body.style.overflow = "hidden";
  }
}