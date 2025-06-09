"use strict";

import { parseHTML } from "js/utils/parseHTML.js";

const params = new URLSearchParams(window.location.search);
const albumId = params.get("id"); // Este será el ID de Spotify

let html = `<iframe style="border-radius:0; position:fixed; top:0; left:0; width:100vw; height:100vh; border:none;" src="https://open.spotify.com/embed/album/${albumId}?utm_source=generator" frameborder="0" allowfullscreen allow="autoplay; fullscreen; clipboard-write; encrypted-media; picture-in-picture" loading="lazy"></iframe>`;
let frame = parseHTML(html);
document.getElementById("spotify-frame").appendChild(frame);