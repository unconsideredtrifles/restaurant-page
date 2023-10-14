import "./style.css";
import restaurantImgSrc from "./restaurant.jpg";
import headingIcon from "./hero-heading-icon.svg";

let mainPageHeadingContent = "Golden Lion Restaurant";
let mainPageParagraphContent = "Here at Goldren Lion Restaurant, we've great food, good atmosphere and \
                            excellent service. Come stop by us to experience authentic cuisines and \
                            dishes prepared by our top chefs for resonable prices. We also have a fast \
                            and punctual delivery service that can bring the food hot and fresh right  \
                            to your doorsteps.";


const loadHomePage = function() {
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

    mainPageParagraph.textContent = mainPageParagraphContent;
    homePageHeroSection.appendChild(mainPageParagraph);

    return [
        homePageHeroSection,
    ];
}

export {
    loadHomePage as default,
};