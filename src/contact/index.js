let contactPageContent = "Contact us : restaurant@golden-lion.com";

const loadContactPage = function () {
    let contactPage = document.createElement("p");
    contactPage.textContent = contactPageContent;
    
    return [
        contactPage,
    ];
}

export {
    loadContactPage as default,
};