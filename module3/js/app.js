
/**
* Define Global Variables
* 
*/

const navFragment = document.createDocumentFragment();
const mySec = document.querySelectorAll('section');

/**
* End Global Variables
* Start Helper Functions
*
*/

// function to Build the Navbar
const createNavBar = () => {
   for (const section of mySec) {
       // define navItem -> 'li' & navItemLink -> 'a'
       const navItem = document.createElement('li');
       const navItemLink = document.createElement('a');

       // Add menu__link class, set the link's text & set the href attribute dynamicly
       navItemLink.classList.add('menu__link');
       navItemLink.innerHTML = `${section.dataset.nav}`;
       navItemLink.setAttribute("href", `#${section.id}`);

       // Build the navbar
       navItem.appendChild(navItemLink);
       navFragment.appendChild(navItem);
       myNav.append(navFragment);
   };
};

// Active Class
const activeClass = () => {
   for (const section of mySec) {
       // rect is each section's boundingClientRect.
       // allNavLinks is the purpose to save the section id name into a variable.
       const rect = section.getBoundingClientRect();
       const allNavLinks = document.querySelectorAll(`[href="#${section.id}"]`);
       for (const link of allNavLinks) {
           (rect.top >= 0 && rect.top < 500) ? (
               // add active classes to targeted link and section
               `
               ${section.classList.add("your-active-class")}
               ${link.classList.add("menu__link__active")}
               `
           ) : (
               //remove the active class from all other sections
               `
               ${section.classList.remove("your-active-class")}
               ${link.classList.remove("menu__link__active")}
               `
           );
       };
   };
};



// build the navbar
createNavBar();

// Add class 'active' to section when near top of viewport
// Set active sections
document.addEventListener('scroll', activeClass);


/**
* End Main Functions
* Begin Events
*
*/

// Build menu
myButton.addEventListener("click", () => myNav.classList.toggle("toggle-show"));

// Extras Scroll to top
const scrollTopDiv = document.querySelector(".scroll-top");
const scrollTopLink = document.querySelector(".scroll-top-link");

