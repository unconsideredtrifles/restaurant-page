import "./style.css";

import potBeefStewImg from "./food-images/pot_beef_stew.jpeg";
import biBimBapImg from "./food-images/bibimbap.jpeg";
import butternutSquashImg from 
"./food-images/butternut_squash_fritters.jpeg";

import chineseRibsImg from "./food-images/chinese_spare_ribs.jpeg";
import chickPeaImg from "./food-images/chickpea.jpeg";
import grilledChickenImg from "./food-images/grilled_chicken.jpeg";

import friedShrimpImg from "./food-images/fried_shrimp.jpeg";
import sushiImg from "./food-images/sushi.jpeg";
import sandwichImg from "./food-images/sandwich.jpeg";

class FoodMenu {
    constructor(name, price, imgLink) {
        this.name = name;
        this.price = price;
        this.imgLink = imgLink
    }

    getDOM() {
        let menu = document.createElement("article");
        menu.classList.add("foodMenu");

        let menuImg = new Image();

        menuImg.src = this.imgLink;
        menuImg.classList.add("foodMenuImg");

        let menuInfo = document.createElement("div");
        menuInfo.classList.add("foodMenuInfo");

        let menuPrice = document.createElement("span");
        menuPrice.classList.add("foodMenuPrice")
        menuPrice.textContent = this.price;
        menuInfo.appendChild(menuPrice);

        let menuName = document.createElement("h5");
        menuName.classList.add("foodMenuName");
        menuName.textContent = this.name;
        menuInfo.appendChild(menuName);

        menu.appendChild(menuImg);
        menu.appendChild(menuInfo);

        return menu;
    }
}

let allMenu = [
    new FoodMenu(
        "Instant Pot Beef Stew",
        "$10.33",
        potBeefStewImg
    ),
    new FoodMenu(
        "Bibimbap",
        "$8.9",
        biBimBapImg
    ),
    new FoodMenu(
        "Butternut Squash Fritter",
        "$9.5",
        butternutSquashImg
    ),
    new FoodMenu(
        "Chinese Spare Ribs",
        "$15.33",
        chineseRibsImg
    ),
    new FoodMenu(
        "Chickpea Tikka Masala",
        "$7.22",
        chickPeaImg
    ),
    new FoodMenu(
        "Grilled Asian Chicken",
        "$10.99",
        grilledChickenImg
    ),
    new FoodMenu(
        "Japenese-style Deep-fried Shrimp",
        "$6.99",
        friedShrimpImg
    ),
    new FoodMenu(
        "Homemade Sushi",
        "$12.55",
        sushiImg
    ),
    new FoodMenu(
        "Grilled Cheese Sandwich",
        "$5.67",
        sandwichImg
    ),
];

const loadMenuPage = function() {
    let menuPageSection = document.createElement("main");
    let menuPageHeading = document.createElement("h4");
    let menuPageBody = document.createElement("div");

    menuPageHeading.setAttribute("id", "menuPageHeading");
    menuPageHeading.textContent = "All Menu";
    menuPageSection.appendChild(menuPageHeading);

    menuPageBody.setAttribute("id", "menuPageBody");

    for(let eachMenu of allMenu) {
        menuPageBody.appendChild(eachMenu.getDOM());
    }

    menuPageSection.appendChild(menuPageBody);

    return [
        menuPageSection,
    ];
}

export {
    loadMenuPage as default,
};