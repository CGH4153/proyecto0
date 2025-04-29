"use strict";

import { sessionManager } from "/js/utils/session.js";
import { authAPI_auto } from "/js/api/_auth.js";
import { messageRenderer } from "/js/renderers/messages.js";

function main(){
    let loginForm = document.getElementById("form-login");
    loginForm.onsubmit = handleSubmitRegister;
}

function handleSubmitRegister(event){
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    sendLogin(formData)
}

async function sendLogin(formData){
    try{
        let loginData = await authAPI_auto.login(formData);
        let sessionToken = loginData.sessionToken;
        let loggedUser = loginData.user;

        sessionManager.login(sessionToken, loggedUser);
        window.location.href = "index.html";
    }

    catch(err){
        messageRenderer.showErrorMessage("Error al iniciar sesión", err);
    }
}

document.addEventListener("DOMContentLoaded", main);