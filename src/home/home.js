import "./style.css";
import restaurantImgSrc from "./restaurant.jpg";
import headingIcon from "./hero-heading-icon.svg";
import clockLogo from "./clock.png";

import potBeefStewImg from "../food-menu/food-images/pot_beef_stew.jpeg";
import biBimBapImg from "../food-menu/food-images/bibimbap.jpeg";
import butternutSquashImg from "../food-menu/food-images/butternut_squash_fritters.jpeg";

let mainPageHeadingContent = "Golden Lion Restaurant";
let mainPageParagraphContent = "Here at Goldren Lion Restaurant, we've great food, good atmosphere and \
                            excellent service. Come stop by us to experience authentic cuisines and \
                            dishes prepared by our top chefs for resonable prices. We also have a fast \
                            and punctual delivery service that can bring the food hot and fresh right  \
                            to your doorsteps.";


const loadHeroSection = function() {
    let homePageHeroSection = document.createElement("section");
    let mainPageHeading = document.createElement("h4");
    let restaurantImg = new Image();
    let mainPageParagraph = document.createElement("p");

    homePageHeroSection.setAttribute("id", "homePage");
    mainPageHeading.setAttribute("id", "heroHeadingWrapper");

    let headingIconImg1 = new Image();
    let headingIconImg2 = new Image();
    let mainPageHeadingText = document.createElement("span");

    mainPageHeadingText.textContent = mainPageHeadingContent;
    mainPageHeadingText.setAttribute("id", "heroHeading");
    headingIconImg1.classList.add("heroHeadingIcon");
    headingIconImg2.classList.add("heroHeadingIcon");
    headingIconImg1.src = headingIcon;
    headingIconImg2.src = headingIcon;

    mainPageHeading.appendChild(headingIconImg1);
    mainPageHeading.appendChild(mainPageHeadingText);
    mainPageHeading.appendChild(headingIconImg2);
    homePageHeroSection.appendChild(mainPageHeading);

    restaurantImg.src = restaurantImgSrc;
    restaurantImg.setAttribute("id", "heroImage");
    homePageHeroSection.appendChild(restaurantImg);

    mainPageParagraph.setAttribute("id", "heroParagraph")
    mainPageParagraph.textContent = mainPageParagraphContent;
    homePageHeroSection.appendChild(mainPageParagraph);

    return homePageHeroSection;
};

const loadScheduleSection = function() {
    let scheduleSection = document.createElement("section");
    let clockImg = new Image();
    let openingTime = document.createElement("div");
    let closingTime = document.createElement("div");

    scheduleSection.setAttribute("id", "scheduleSection");
    openingTime.setAttribute("id", "openingTime");
    closingTime.setAttribute("id", "closingTime");

    clockImg.src = clockLogo;
    clockImg.width = "140";
    clockImg.setAttribute("id", "clockLogo");
    scheduleSection.appendChild(clockImg);

    let openingTimeHeader = document.createElement("h5");
    let openingTimeText = document.createElement("p");
    openingTimeHeader.classList.add("scheduleHeader");
    openingTimeText.classList.add("scheduleTime");
    openingTimeHeader.textContent = "Opening Time";
    openingTimeText.innerHTML = "8:00 AM (Monday - Friday)<br>";
    openingTimeText.innerHTML += "7:00 AM (Saturday)";

    openingTime.appendChild(openingTimeHeader);
    openingTime.appendChild(openingTimeText);

    let closingTimeHeader = document.createElement("h5");
    let closingTimeText = document.createElement("p");
    closingTimeHeader.classList.add("scheduleHeader");
    closingTimeText.classList.add("scheduleTime");
    closingTimeHeader.textContent = "Closing Time";
    closingTimeText.innerHTML = "9:00 PM (Monday - Friday)<br>";
    closingTimeText.innerHTML += "10:00 PM (Saturday)";

    closingTime.appendChild(closingTimeHeader);
    closingTime.appendChild(closingTimeText);

    scheduleSection.appendChild(openingTime);
    scheduleSection.appendChild(closingTime);

    return scheduleSection;
};

const loadPopularMenu = function() {
    let menuSection = document.createElement("section");
    let menuHeading = document.createElement("h4");
    let allMenu = document.createElement("div");

    menuSection.setAttribute("id", "popularMenuSection");

    menuHeading.setAttribute("id", "popularMenuHeading");
    menuHeading.textContent = "Popular Menu";
    menuSection.appendChild(menuHeading);

    allMenu.setAttribute("id", "popularMenus");

    let menu1 = document.createElement("article");
    let menu2 = document.createElement("article");
    let menu3 = document.createElement("article");

    menu1.classList.add("popularMenu");
    menu2.classList.add("popularMenu");
    menu3.classList.add("popularMenu");

    let menuImg1 = new Image();
    let menuImg2 = new Image();
    let menuImg3 = new Image();

    menuImg1.src = potBeefStewImg;
    menuImg2.src = biBimBapImg;
    menuImg3.src = butternutSquashImg;
    menuImg1.classList.add("popularMenuImg");
    menuImg2.classList.add("popularMenuImg");
    menuImg3.classList.add("popularMenuImg");
    menu1.appendChild(menuImg1);
    menu2.appendChild(menuImg2);
    menu3.appendChild(menuImg3);

    let menuDescription1 = document.createElement("div");
    let menuDescription2 = document.createElement("div");
    let menuDescription3 = document.createElement("div");
    menuDescription1.classList.add("popularMenuDescription");
    menuDescription2.classList.add("popularMenuDescription");
    menuDescription3.classList.add("popularMenuDescription");

    let price1 = document.createElement("span");
    let price2 = document.createElement("span");
    let price3 = document.createElement("span");

    price1.classList.add("popularMenuPrice");
    price2.classList.add("popularMenuPrice");
    price3.classList.add("popularMenuPrice");
    price1.textContent = "$10.33"
    price2.textContent = "$8.9"
    price3.textContent = "$9.5"
    menuDescription1.appendChild(price1);
    menuDescription2.appendChild(price2);
    menuDescription3.appendChild(price3);

    let menuName1 = document.createElement("h5");
    let menuName2 = document.createElement("h5");
    let menuName3 = document.createElement("h5");

    menuName1.classList.add("popularMenuName");
    menuName2.classList.add("popularMenuName");
    menuName3.classList.add("popularMenuName");

    menuName1.textContent = "Instant Pot Beef Stew";
    menuName2.textContent = "Bibimbap";
    menuName3.textContent = "Butternut Squash Fritter";
    menuDescription1.appendChild(menuName1);
    menuDescription2.appendChild(menuName2);
    menuDescription3.appendChild(menuName3);

    menu1.appendChild(menuDescription1);
    menu2.appendChild(menuDescription2);
    menu3.appendChild(menuDescription3);

    allMenu.appendChild(menu1);
    allMenu.appendChild(menu2);
    allMenu.appendChild(menu3);

    menuSection.appendChild(allMenu);
    return menuSection;
};

const loadHomePage = function() {
    return [
        loadHeroSection(),
        loadScheduleSection(),
        loadPopularMenu(),
    ];
};

export {
    loadHomePage as default,
};