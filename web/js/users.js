"use strict";

import {sessionManager} from "/js/utils/session.js";

function main(){
    showUser();
    addLogoutHandler();
    hideHeaderOptions();
}

function showUser(){
    let title = document.getElementById("navbar-title");
    let text;

    if(sessionManager.isLogged()){
        const user = sessionManager.getLoggedUser();
        console.log("Usuario logeado:", user.username);
        let username = user.firstName;
        text = "Hola, " + username;
        window.location.href = "index.html";
    }

    else{
        console.log("No hay usuario logeado");
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

    if(sessionManager.isLogged()){
        headerRegister.style.display = "none";
        headerLogin.style.display = "none";
        headerLogout.style.display = "";
    }

    else{
        headerLogout.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", main);