/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Logan Bryant
 */

/** namespace. */
var rhit = rhit || {};
var navOpened = false;

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");
};

function navClicked() { 
    let navbar = document.querySelector("#myNav");
    let navMenu = document.querySelector("#navMenuButton");
    if(!navOpened){
        if(screen.width > 700)
            navbar.style.height = "8em"
        else    
            navbar.style.height = "2em"
        navMenu.innerHTML= "☰ Close"
        navOpened = true;
    } else {
        navbar.style.height = "0";
        navMenu.innerHTML= "☰ Menu"
        navOpened = false;
    }
};

rhit.main();
