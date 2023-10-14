import "./style.css";
import restaurantImgSrc from "./restaurant.jpg";
import headingIcon from "./hero-heading-icon.svg";

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
    let openingTime = document.createElement("div");
    let closingTime = document.createElement("div");

    scheduleSection.setAttribute("id", "scheduleSection");
    openingTime.setAttribute("id", "openingTime");
    closingTime.setAttribute("id", "closingTime");

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

const loadHomePage = function() {
    return [
        loadHeroSection(),
        loadScheduleSection(),
    ];
};

export {
    loadHomePage as default,
};