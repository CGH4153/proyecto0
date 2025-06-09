"use strict";

import { sessionManager } from "/docs/js/utils/session.js";
import { authAPI_auto } from "/docs/js/api/_auth.js";
import { userValidator } from "/docs/js/validators/usersValidator.js";
import { messageRenderer } from "/docs/js/renderers/messages.js";

function main(){
    let registerForm = document.getElementById("form");
    registerForm.onsubmit = handleSubmitRegister;
}

function handleSubmitRegister(event){
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    let errors = userValidator.validateRegister(formData);

    if(errors.length > 0){
        let errorsDiv = document.getElementById("errors");
        errorsDiv.innerHTML = "";

        for(let error of errors){
            messageRenderer.showErrorMessage(error);
        }
    }

    else{
        sendRegister(formData);
    }
}

async function sendRegister(formData){
    try{
        let loginData = await authAPI_auto.register(formData);
        let sessionToken = loginData.sessionToken;
        let loggedUser = loginData.user;

        sessionManager.login(sessionToken, loggedUser);
        window.location.href = "index.html";
    }

    catch(err){
        messageRenderer.showErrorMessage("Error al registar el nuevo usuario", err);
        console.log(err);
    }
}

document.addEventListener("DOMContentLoaded", main);