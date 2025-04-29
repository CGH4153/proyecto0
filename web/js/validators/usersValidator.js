"use strict";

const userValidator = {
    validateRegister: function(formData){
        let errors = [];
        let firstName = formData.get("firstname");
        let lastName = formData.get("lastname");
        let username = formData.get("username");
        let email = formData.get("email");
        let password = formData.get("password");
        let password2 = formData.get("password2");

        if (firstName.length < 3 || lastName.length < 3) {
            errors.push("El nombre y apellidos deben ser mayor de 3 caracteres");
        }

        if (!/^[a-zA-Z\s]+$/.test(firstName) || !/^[a-zA-Z\s]+$/.test(lastName)) {
            errors.push("El nombre y apellidos solo pueden contener letras y espacios");
        }

        if(username.length < 5 || username.length > 15) {
            errors.push("El nombre de usuario debe tener entre 5 y 15 caracteres")
        }

        if (!/^[a-z0-9]+$/.test(username)) {
            errors.push("El nombre de usuario solo puede contener letras minúsculas y números");
        }

        const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
        if (!email || !emailPattern.test(email)) {
            errors.push("El correo no sigue el formato solicitado (e.j., usuario@gmail.com)");
        }

        if (password.length < 8) {
            errors.push("La contraseña debe tener al menos 8 caracteres");
        }
    
        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            errors.push("La contraseña debe contener al menos un número, una letra minúscula y una mayúscula");
        }

        if (password !== password2) {
            errors.push("Las contraseñas deben coincidir");
        }

        return errors;
    }
};

export { userValidator };
