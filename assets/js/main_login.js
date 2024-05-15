var user = document.getElementById('user')
var email = document.getElementById('email')
var password = document.getElementById('password')
var form = document.getElementById('form')
var parrafo = document.getElementById('warnings')
var entrar
console.log('HELLO MY PANA')

form.addEventListener("submit", e => {
    e.preventDefault()

    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (user.value.length < 5) {
        warnings += 'El Nombre no es valido <br>'
        entrar = true
    }

    if (!regexEmail.test(email.value)) {
        warnings += 'El Email no es valido <br>'
        entrar = true
    }

    if (password.value.length < 8) {
        warnings += 'La contraseña no es valida <br>'
        entrar = true
    }

    if (entrar) {
        parrafo.innerHTML = warnings
    } else {
        parrafo.innerHTML = 'ENVIADO'

        const data = {
            username: user.value,
            email : email.value,
            password: password.value
        }
        console.log(data)
        
        if(user.value === "fxckll") {
            window.location = "/index.html"
        }
    }
})

