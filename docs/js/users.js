"use strict";

import {sessionManager} from "js/utils/session.js";

function main(){
    showUser();
    addLogoutHandler();
    hideHeaderOptions();
}

function showUser(){
    let title = document.getElementById("navbar-title");
    let text;

    if(sessionManager.isLogged()){
        let username = sessionManager.getLoggedUser().firstName;

        text = "Hola, " + username;
    }

    else{
        text = "Índice de navegación";
    }

    title.textContent = text;
}

function addLogoutHandler(){
    let logout = document.getElementById("navbar-logout");

    logout.onclick = function(){
        sessionManager.logout();
        window.location.href = "index.html";
    };
}

function hideHeaderOptions(){
    let headerRegister = document.getElementById("navbar-register");
    let headerLogin = document.getElementById("navbar-login");
    let headerLogout = document.getElementById("navbar-logout");
    let headerAccount = document.getElementById("navbar-myaccount");
    let headerSettings = document.getElementById("navbar-settings");

    if(sessionManager.isLogged()){
        headerRegister.style.display = "none";
        headerLogin.style.display = "none";
        headerLogout.style.display = "";
        headerAccount.style.display = "";
        headerSettings.style.display = "";
    }

    else{
        headerRegister.style.display = "";
        headerLogin.style.display = "";
        headerLogout.style.display = "none";
        headerAccount.style.display = "none";
        headerSettings.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", main);