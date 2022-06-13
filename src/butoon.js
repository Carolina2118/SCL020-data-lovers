const navButon = document.querySelector("nav-buton")
const navMenu = document.querySelector("nav-menu")
navButon.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
        //devuelve los nombres de clase CSS de un elemento.
});