import "./style.css";

class Credit {
    constructor(description, artistWork, artistProfile) {
        this.imgDescription = description;
        this.artistWork = artistWork;
        this.artistProfile = artistProfile;
    }

    getDOM() {
        let credit = document.createElement("p");
        credit.classList.add("credits");

        credit.textContent = `${this.imgDescription}`;

        if(this.artistProfile) {
            let artistProfileLink = document.createElement("a");
            artistProfileLink.classList.add("creditedLink");
            artistProfileLink.href = this.artistProfile.link;
            artistProfileLink.textContent = this.artistProfile.profile;
            credit.innerHTML += " by ";
            credit.appendChild(artistProfileLink);
        }

        let creditImgLink = document.createElement("a");
        creditImgLink.classList.add("creditedLink");
        creditImgLink.href = this.artistWork.link
        creditImgLink.textContent = this.artistWork.platform;
        credit.innerHTML += " on ";
        credit.appendChild(creditImgLink);

        return credit;
    }
}

let allCredits =  [
    new Credit(
        "Restaurant Banner Image",
        {
            platform: "unsplash",
            link: "https://unsplash.com/photos/brown-and-gray\
                  -concrete-store-nmpW_WwwVSc",
        },
        {
            profile: "shawnanggg",
            link: "https://unsplash.com/@shawnanggg",
        }
    ),
    new Credit(
        "Background Clock Image",
        {
            platform: "pngimg",
            link: "https://pngimg.com/image/51546",
        }
    ),
    new Credit(
        "Instant Pot Beef Stew Image",
        {
            platform: "All Recipes",
            link: "https://www.allrecipes.com/recipe/263037/instant-pot\
                  -best-beef-stew/",
        }
    ),
    new Credit(
        "Bibimbap Image",
        {
            platform: "All Recipes",
            link: "https://www.allrecipes.com/recipe/228240\
                  /bibimbap-korean-rice-with-mixed-vegetables/",
        }
    ),
    new Credit(
        "Butternut Squash Fritters Image",
        {
            platform: "All Recipes",
            link: "https://www.allrecipes.com/butternut-squash-fritters-recipe\
                  -7969440",
        }
    ),
    new Credit(
        "Chinese Spare Ribs Image",
        {
            platform: "All Recipes",
            link: "https://www.allrecipes.com/recipe/77408/chinese-spareribs/",
        },
        {
            profile: "Marcy C",
            link: "https://www.allrecipes.com/cook/12438914",
        }
    ),
    new Credit(
        "Chicken Tikka Masala Image",
        {
            platform: "All Recipes",
            link: "https://www.allrecipes.com/chickpea-tikka-masala-recipe\
                  -7497387",
        }
    ),
    new Credit(
        "Grilled Asian Chicken Image",
        {
            platform: "All Recipes",
            link: "https://www.allrecipes.com/recipe/8919/grilled-asian\
                  -chicken/",
        }
    ),
    new Credit(
        "Japanese-style Deep-fried Shrimp Image",
        {
            platform: "All Recipes",
            link: "https://www.allrecipes.com/recipe/127500/japanese-style\
                  -deep-fried-shrimp/",
        }
    ),
    new Credit(
        "Homemade Sushi Image",
        {
            platform: "All Recipes",
            link: "https://www.allrecipes.com/recipe/24228/sushi-roll/",
        }
    ),
    new Credit(
        "Grilled Cheese Sandwich Image",
        {
            platform: "All Recipes",
            link: "https://www.allrecipes.com/recipe/23891/grilled-cheese-\
                   sandwich/",
        }
    ),
];

const loadCreditPage = function () {
    let creditPageSection = document.createElement("main");
    creditPageSection.setAttribute("id", "creditPageSection")

    let creditPageBanner = document.createElement("div");
    creditPageBanner.setAttribute("id", "creditPageBanner");

    let creditPageBannerText = document.createElement("h4");
    creditPageBannerText.setAttribute("id", "creditPageBannerText");
    creditPageBannerText.textContent = "Credits for Photos";
    creditPageBanner.appendChild(creditPageBannerText);

    let creditPageBody = document.createElement("div");
    creditPageBody.setAttribute("id", "allCredits");
    for(let eachCredit of allCredits) {
        creditPageBody.appendChild(eachCredit.getDOM());
    }

    creditPageSection.appendChild(creditPageBanner);
    creditPageSection.appendChild(creditPageBody);
    
    return [
        creditPageSection,
    ];
}

export {
    loadCreditPage as default,
};