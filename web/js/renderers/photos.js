"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";

const photoRenderer = {
asCard: function(photo) {
    const fecha = new Date(photo.fecha_publicacion);
    const fechaFormateada = fecha.toLocaleDateString('es-ES');

    let html = `<div class="col-md-4">
    <div class="card">
    <img src="${photo.url_photo}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title" id="card-title">${photo.nombre_album}</h5>
    <div class="card-artist">
    <img src="${photo.url_avatar}" class="avatar">
    <a class="card-artist" href="artist.html?name=${encodeURIComponent(photo.nombre_artista)}"> ${photo.nombre_artista}</a>
    </div>
    <p class="card-date">${fechaFormateada}</p>
    </div>
    </div>
    </div>`;
    let card = parseHTML(html);
    return card;
},

asAlbum: function(photo) {
    const fecha = new Date(photo.fecha_publicacion);
    const fechaFormateada = fecha.toLocaleDateString('es-ES');

    let html = `<div class="col-md-4">
    <div class="card">
    <a class="card-photo" href="album.html?id=${photo.spotify_id}">
    <img src="${photo.url_photo}" class="card-img-top">
    </a>
    <div class="card-body">
    <p class="card-title">${photo.nombre_album}</p>
    <p class="card-artist"> ${photo.nombre_artista}</p>
    <p class="card-date">${fechaFormateada}</p>
    </div>
    </div>
    </div>`;
    let card = parseHTML(html);
    return card;
},
};

export { photoRenderer };