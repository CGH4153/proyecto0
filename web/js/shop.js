"use strict";

import { albumswithartistsAPI_auto } from "/js/api/_albumswithartists.js";
import { galleryRenderer } from "/js/renderers/gallery.js";
import { messageRenderer } from "/js/renderers/messages.js";


async function main() {
    loadAllPhotos();
}

async function loadAllPhotos() {
    let galleryContainer = document.querySelector("div.container");
    try {
        let photos = await albumswithartistsAPI_auto.getAll();
        let cardGallery = galleryRenderer.asCardShop(photos);
        galleryContainer.appendChild(cardGallery);
    } 

    catch (err) {
        messageRenderer.showErrorMessage("Error al cargar las fotos", err);
    }
}

document.addEventListener("DOMContentLoaded", main);