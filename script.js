let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')
let form = document.getElementById('form')

form.addEventListener('submit', function(e){
    
    if(emailInput.validity.typeMismatch){
        e.preventDefault()
        throwError('email', 'O valor precisa ser um email válido.')
    }
    if(emailInput.validity.valueMissing){
        e.preventDefault()
        throwError('email', 'Insira um endereço de email.')
    }
    if(passwordInput.validity.tooShort){
        e.preventDefault()
        throwError('password', 'A senha precisa conter no mínimo 8 caracteres.')
    }
    if (!passwordInput.value.match(/\d+/)) {
        e.preventDefault()
        throwError('password', 'A senha precisa conter pelo menos um número.')
    }
    if(!passwordInput.value.match(/[A-Z]+/)){
        e.preventDefault()
        throwError('password', 'A senha precisa conter pelo menos uma letra maiúscula.')
    }
    console.log(passwordInput.value.match(/[^a-zA-Z0-9]/))
    if (!passwordInput.value.match(/[^a-zA-Z0-9]/)) {
        e.preventDefault()
        throwError('password', 'A senha precisa conter pelo menos um caractere especial.')
    }
    if (passwordInput.value.match(/\s/)) {
        e.preventDefault()
        throwError('password', 'Não é permitido espaços em branco')
      } 
})

function throwError(errorType, message){
    
    if(errorType == 'email'){
        emailInput.classList.add('error')
        errorMessage = document.getElementById('email-error')
        if(!errorMessage.innerHTML.includes(message)) errorMessage.innerHTML += ` ${message}`
    }
    else if(errorType == 'password'){
        passwordInput.classList.add('error')
        errorMessage = document.getElementById('password-error')
        if(!errorMessage.innerHTML.includes(message)) errorMessage.innerHTML += ` ${message}`
    }
}