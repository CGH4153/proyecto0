"use strict"

import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";
import { authAPI_auto } from "/js/api/_auth.js";

function main() {
    let myform = document.getElementById("form-login");
    myform.onsubmit = handleSubmitRegister;
}

function handleSubmitRegister(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    sendRegister(formData);

    for (let pair of formData.entries()) {
        console.log(pair[0]+ ': ' + pair[1]);
    } 
}

async function sendRegister(formData) {
    try {
        let loginData = await authAPI_auto.login(formData);
        let sessionToken = loginData.sessionToken;
        let loggedUser = loginData.user;

        sessionManager.login(sessionToken, loggedUser);
        window.location.href = "index.html";
    } 
    
    catch (err) {
        messageRenderer.showErrorMessage("Error al iniciar sesión", err);
        console.log(err);
    }
}

document.addEventListener("DOMContentLoaded", main);