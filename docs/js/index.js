"use strict";

import { musicAPI_auto } from "/proyecto0/docs/js/api/_music.js";
import { galleryRenderer } from "/proyecto0/docs/js/renderers/gallery.js";
import { messageRenderer } from "/proyecto0/docs/js/renderers/messages.js";

async function main() {
    loadAllPhotos();

    // Función para mostrar el banner si no se ha aceptado previamente
    window.onload = () => {
        if (!getCookie("cookiesAccepted")) {
            document.getElementById("cookie-banner").style.display = "block";
        }

        // Aceptar cookies
        document.getElementById("accept-cookies").onclick = () => {
            document.cookie = "cookiesAccepted=true; path=/";
            document.getElementById("cookie-banner").style.display = "none";
        };
    };
}

async function loadAllPhotos() {
    let galleryContainer = document.querySelector("div.container");
    try {
        let photos = await musicAPI_auto.getAll();
        let cardGallery = galleryRenderer.asCardGallery(photos);
        galleryContainer.appendChild(cardGallery);
    } 

    catch (err) {
        messageRenderer.showErrorMessage("Error al cargar las fotos", err);
    }
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}


document.addEventListener("DOMContentLoaded", main);
