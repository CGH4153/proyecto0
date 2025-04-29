"use strict";

import { sessionManager } from "/js/utils/session.js";
import { authAPI_auto } from "/js/api/_auth.js";
import { userValidator } from "/js/validators/usersValidator.js";
import { messageRenderer } from "/js/renderers/messages.js";

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
    }
}

document.addEventListener("DOMContentLoaded", main);