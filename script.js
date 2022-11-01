const username = document.getElementById('username');
const emailto = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');
const parraWarnings = document.getElementById('warnings');

form.addEventListener('submit', e => {
    e.preventDefault()
    let warnings = ''
    let enter = false
    let regexEmailto = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parraWarnings.innerHTML = ''

    if(username.value.length < 3) {
        warnings += `Nombre muy corto <br>`
        enter = true
    }
    if(!regexEmailto.test(emailto.value)) {
        warnings += `Email no es valido <br>`
        enter = true
    }
    if(password.value.length < 8) {
        warnings += `Contraseña muy corta <br>`
        enter = true
    }
    if(enter) {
        parraWarnings.innerHTML = warnings
    }else {
       parraWarnings.innerHTML = 'Enviado' 
    }
})
