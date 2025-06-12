"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { photoRenderer } from "/js/renderers/photos.js";

const galleryRenderer = {
    asCardGallery: function (photos) {
        let galleryContainer = document.getElementById("photo-gallery");
        let row = parseHTML('<div class="row"></div>');
        galleryContainer.appendChild(row);

        let counter = 0;
        for (let photo of photos) {
            if(photo.destacado == 1){
                let card = photoRenderer.asCard(photo);
                row.appendChild(card);
                counter += 1;
                
                if (counter % 3 === 0) {
                    row = parseHTML('<div class="row"></div>');
                    galleryContainer.appendChild(row);
                }
            }
            
        }
        return galleryContainer;
    },

    asCardShop: function(photos) {
        let galleryContainer = document.getElementById("photo-gallery");
        let row = parseHTML('<div id="elemento" class="row m-3 border border-dark rounded"></div>');
        galleryContainer.appendChild(row);

        let counter = 0;
        for (let photo of photos) {
            let card = photoRenderer.asShop(photo);
            row.appendChild(card);
            row = parseHTML('<div id="elemento" class="row m-3 border border-dark rounded"></div>');
            galleryContainer.appendChild(row);
        }

        return galleryContainer;
    }
};

export { galleryRenderer };