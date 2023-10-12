let menuPageContent = "Here are our delicious menus!";

const loadMenuPage = function() {
    let menuPage = document.createElement("p");
    menuPage.textContent = menuPageContent;

    return [
        menuPage,
    ];
}

export {
    loadMenuPage as default,
};