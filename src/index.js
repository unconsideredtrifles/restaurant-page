import "./style.css";
import loadHomePage from "./home/home.js";
import loadMenuPage from "./food-menu/menu.js";
import loadContactPage from "./contact/contact.js";

let mainPage = document.getElementById("content");
let navTabs = Array.from(document.getElementsByClassName("navItem"));

navTabs.forEach((eachNavTab) => {
    eachNavTab.addEventListener("click", function() {
        if(this.classList.contains("activeItem")) {
            return;
        }
        switchTab(this);
    });
});

function switchTab(tabToSwitch) {
    let activeTab = document.getElementsByClassName("activeItem")[0];
    mainPage.innerHTML = "";
    activeTab.classList.remove("activeItem");
    tabToSwitch.classList.add("activeItem");

    let pageContent;
    if(tabToSwitch.textContent === "Home") {
        pageContent = loadHomePage();
    } else if(tabToSwitch.textContent === "Food Menu") {
        pageContent = loadMenuPage();
    } else {
        pageContent = loadContactPage();
    }

    updateMainPage(pageContent);
}

function updateMainPage(content) {
    content.forEach((eachHTMLElement) => {
        mainPage.appendChild(eachHTMLElement);
    });
}

updateMainPage(loadHomePage());