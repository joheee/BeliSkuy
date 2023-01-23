// COLOR
let colorGreen = '#42b549'
let colorLine = '#D3DEDC'
let colorWhite = '#ffffff'
let colorFont = 'rgba(49,53,59,0.68)'
let colorError = '#ff0000'
let colorButtonInactive = 'rgb(66 181 73 / 60%)'

// LOGIN PART

let loginContainer = document.getElementsByClassName('login-container')[0]
let registerContainer = document.getElementsByClassName('register-container')[0]

let loginFunction = () => {
    let userLength = 0
    let passLength = 0
    
    
    let setActiveButton = () => {
        let loginButtonInput = document.getElementById('login-button')
    
        if(userLength === 0 && passLength === 0){
            loginButtonInput.style.backgroundColor = colorButtonInactive
            loginButtonInput.style.cursor = 'default'
        }
        else if(userLength === 0) {
            loginButtonInput.style.backgroundColor = colorButtonInactive
            loginButtonInput.style.cursor = 'default'
        }    
        else if(passLength === 0){
            loginButtonInput.style.backgroundColor = colorButtonInactive
            loginButtonInput.style.cursor = 'default'
        }
        else if(userLength >= 7 && passLength >= 10){
            loginButtonInput.style.backgroundColor = colorGreen
            loginButtonInput.style.cursor = 'pointer'
        }
    }
    
    setActiveButton()
    // username validation
    let loginTextInput = document.getElementById('login-user-email')
    loginTextInput.addEventListener('keyup', (e) => {
        let user = loginTextInput.value
        
        let errorMessage = document.getElementsByClassName('login-error-message')[0]
        
        userLength = user.length
        if(user.length >= 7){
            errorMessage.innerHTML = ''
            loginTextInput.style.borderColor = colorGreen
        } 
        else if(user.length === 0){
            errorMessage.innerHTML = ''
            loginTextInput.style.borderColor = colorLine
        }
        else {
            errorMessage.innerHTML = 'username/email minimal 7 kata'
            loginTextInput.style.borderColor = colorError
        } 
        setActiveButton()
    })
    
    let loginPassInput = document.getElementById('login-password')
    loginPassInput.addEventListener('keyup', () => {
        let pass = loginPassInput.value
        console.log(pass)
        
        let errorMessage = document.getElementsByClassName('login-error-message')[1]
        
        passLength = pass.length
        if(pass.length >= 10){
            errorMessage.innerHTML = ''
            loginPassInput.style.borderColor = colorGreen
        }
        else if(pass.length === 0){
            errorMessage.innerHTML = ''
            loginPassInput.style.borderColor = colorLine
        }
        else {
            errorMessage.innerHTML = 'password minimal 10 kata'
            loginPassInput.style.borderColor = colorError 
        }
        setActiveButton()
    })
    
    
    let loginButton = document.getElementById('login-button')
    loginButton.addEventListener('click', () =>{
        
        if(userLength >= 7 && passLength >= 10){
            window.location.href = '../../index.html'
            messages = ''
        }
        
    })
    
    let toogleRegister = document.getElementById('login-direct-register-toogle')
    toogleRegister.addEventListener('click', () =>{
        loginContainer.classList.remove('show')
        registerContainer.classList.add('show')
    })

}

export { loginFunction }