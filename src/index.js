import "./styles.css";
import "./assets/menu.png";

// on click event grow width, expand down to show menu options
// when menu button or sub-menu option is clicked, hide menu (and technically render display to chosen page, or none if menu option clicked again to hide)
const navMenu = document.querySelector(".dropdown-menu");
window.addEventListener("click", function (e) {
    // if dropdown has class 'hidden', remove it, otherwise, add it.
    if (e.target.matches("#hamburger-icon") || e.target.matches(".dropdown")) {
        // when clicked, expand to show menu options for mobile navigation
        if (navMenu.closest(".hidden")) {
            navMenu.classList.remove("hidden");
        } else {
            navMenu.classList.add("hidden");
        }
    }
});
