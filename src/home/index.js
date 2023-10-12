import "./style.css";
import restaurantImgSrc from "./restaurant.jpg";

let mainPageHeadingText = "Golden Lion Restaurant";
let mainPageParagraphText = "Here at Goldren Lion Restaurant, we've great food, good atmosphere and \
                            excellent service. Come stop by us to experience authentic cuisines and \
                            dishes prepared by our top chefs for resonable prices. We also have a fast \
                            and punctual delivery service that can bring the food hot and fresh right  \
                            to your doorsteps.";


const loadHomePage = function() {
    let mainPageHeading = document.createElement("h4");
    let restaurantImg = new Image();
    let mainPageParagraph = document.createElement("p");

    mainPageHeading.textContent = mainPageHeadingText;
    restaurantImg.src = restaurantImgSrc;
    restaurantImg.setAttribute("id", "mainImage");
    mainPageParagraph.textContent = mainPageParagraphText;

    return [
        mainPageHeading,
        restaurantImg,
        mainPageParagraph,
    ];
}

export {
    loadHomePage as default,
};