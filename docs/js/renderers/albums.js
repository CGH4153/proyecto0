"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { photoRenderer } from "/js/renderers/photos.js";

const albumRenderer = {
    asCardGallery: function (photos) {
        let galleryContainer = document.getElementById("photo-gallery");
        let row = parseHTML('<div class="row"></div>');
        galleryContainer.appendChild(row);

        let counter = 0;
        for (let photo of photos) {
            let card = photoRenderer.asAlbum(photo);
            row.appendChild(card);
            counter += 1;
            
            if (counter % 3 === 0) {
                row = parseHTML('<div class="row"></div>');
                galleryContainer.appendChild(row);
            }
        }
        return galleryContainer;
    }
};

export { albumRenderer };