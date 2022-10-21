

//  Define Global Variables

const sections = document.querySelectorAll("section");
const navUl = document.getElementById("navbar__list");


// building the navigation bar
function buildNav() {
const fragment = document.createDocumentFragment();
  sections.forEach(function (section) {
    const navLi = document.createElement("li");
    navLi.innerHTML = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    fragment.appendChild(navLi);
  });
  navUl.appendChild(fragment);
}
//calling the buildNav function to
buildNav();

// Add class 'active' to section when near top of viewport
window.onscroll = function addActive() {
  sections.forEach((section) => {
    let Bound = section.getBoundingClientRect();
    if (Bound.top >= 0) {
      if (!section.classList.contains("your-active-class")) {
        section.classList.add("your-active-class");

      }
    } else {
      section.classList.remove("your-active-class");
    }
  });
};
// Add active link */
function addActiveLink(id){
//Add Link Active
document . querySelector( '.active__link' ) ?.classList.remove( 'active__link' ) ;
document .querySelector(`[href="#${id}"]`) .classList.add( 'active__link' ) ;
}
// walk smoothly between sections
navUl.addEventListener("click", (action) => {
    action.preventDefault();
    if (action.target.dataset.nav) {
      document
        .getElementById(`${action.target.dataset.nav}`)
        .scrollIntoView({ behavior: "smooth" });
        addActiveLink(`action.target.dataset.[data-nav=${section.id}]`);
    }
  });



/**
 * End Main Functions
 *
 */
