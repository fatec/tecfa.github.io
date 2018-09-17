/**
 * Utility and NON-obstrusive JavaScript for the site
 */

/**
 * UX : show active link on main nav
 */

//Get the current URL of the page
var currentURL = window.location.href;

// Automatically add an active class to the main links in the navigation
if (document.querySelectorAll("#main-tecfa-nav-links")) {

    //Get all the links in the main navigation
    var mainLinks = document.querySelectorAll("#main-tecfa-nav-links ul li");

    //Only for the homepage (first element in the array with 0 index)
    var homepageURL = mainLinks[0].querySelector("a").href;
    if (currentURL == homepageURL || currentURL == homepageURL + "index.html") {
        mainLinks[0].classList.add("active");
    }

    //For all the other links (starting from 1 in the loop then)
    for (let i = 1; i < mainLinks.length; i++) {
        let listLink = mainLinks[i].querySelector("a").href;
        console.log(listLink);
        if (currentURL.includes(listLink)) {
            mainLinks[i].classList.add("active");
        }
    }
}