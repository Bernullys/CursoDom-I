const API_AVO = "https://platzi-avo.vercel.app/api/avo";
const IMAGES_BASE = "https://platzi-avo.vercel.app";

async function getAvocados () {

    try {

        const response = await fetch(API_AVO);
        console.log(`Response Status ${response.status}`)
        if (response.status != 200) {
            throw new Error(`Error fetching data: ${statusName}`);
        };
        const info = await response.json();
        console.log("This is the info from API_AVO");
        console.log(info);
    
        const avocadosSection = document.querySelector(".avocados-container");
        avocadosSection.className = "avocados-container";
        const helperList = [];
    
        info.data.forEach (avoInfo => {
            const articuleContainer = document.createElement("article");
            articuleContainer.className = "avo-container";
            const avoImage = document.createElement("img");
            avoImage.className = "avo-container-img";
            avoImage.src = (`${IMAGES_BASE}${avoInfo.image}`);
            const avoNamePriceContainer = document.createElement("section");
            avoNamePriceContainer.className = "avo-container-section";
            const avoName = document.createElement("h3");
            avoName.className = "avo-container-section-h3";
            avoName.textContent = avoInfo.name;
            const avoPrice = document.createElement("h3");
            avoPrice.className = "avo-container-section-h3";
            avoPrice.textContent = `$ ${avoInfo.price}`;
    
            avoNamePriceContainer.appendChild(avoName);
            avoNamePriceContainer.appendChild(avoPrice);
            articuleContainer.appendChild(avoImage);
            articuleContainer.appendChild(avoNamePriceContainer);
    
            helperList.push(articuleContainer);
    
        });
    
        avocadosSection.append(...helperList);

    } catch (error) {

        const errorGettingAvoData = document.querySelector(".error-span");
        errorGettingAvoData.textContent = `Error ${error.message}`;
        throw new Error ("There was an error getting avo data");

    };

};

getAvocados();