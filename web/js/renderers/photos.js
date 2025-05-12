 "use strict";

 import { parseHTML } from "/js/utils/parseHTML.js";

 const photoRenderer = {
    asCard: function(photo) {
        let html = `<div class="col-md-4">
        <div class="card bg-dark text-light">
        <img src="${photo.url}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title text-center">${photo.nombre}</h5>
        <p class="card-text">${photo.fecha_publicacion}</p>
        <p class="text-end">User ${photo.artista}</p>
        </div>
        </div>
        </div>`;
        let card = parseHTML(html);
        return card;
    },
 };

 export { photoRenderer };