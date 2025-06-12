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

asShop: function(photo) {
    const fecha = new Date(photo.fecha_publicacion);
    const fechaFormateada = fecha.toLocaleDateString('es-ES');

    let html = `<div class="photo-block row">
                <div class="col-md">
                    <img class="photo-image" src=${photo.url_photo}>
                </div>

                <div class="col-md">
                    <a id="details" href="details.html?id=${photo.id}">
                        <h2>${photo.nombre_album}</h2>
                        <p>${fechaFormateada}</p>
                    </a>
                    <div class="row">
                        <div class="col-md">
                            <img class="photo-artist" src="${photo.url_avatar}">  
                            <span class="ms-2">${photo.nombre_artista}</span>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <a id="button" href="basket.html">
                            <button class="btn btn-success">Añadir a la cesta</button>
                        </a>
                    </div>
                </div>
            </div>`;

    let card = parseHTML(html);
    return card;
}
};

export { photoRenderer };