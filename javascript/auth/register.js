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

let registerFunction = () => {
        
    let userLength = 0
    let emailLength = 0
    let passLength = 0
    let passInput = ""
    let conPassLength = 0
    let conPassInput = ""
    let isSame = true;
    let isRadioAnswer = false
    let isCheckboxAnswer = false
    let registerButton = document.getElementById('register-button')
        
    let setActiveRegister = () => {
        
        if(!isCheckboxAnswer || !isRadioAnswer || isSame || userLength < 7 || emailLength < 10){
            registerButton.style.backgroundColor = colorButtonInactive
            registerButton.style.cursor = 'default'
        }
        else {
            registerButton.style.backgroundColor = colorGreen
            registerButton.style.cursor = 'pointer'
        }
    }
        
    setActiveRegister()
    
    let registerTextInput = document.getElementById('register-user')
    registerTextInput.addEventListener('keyup', () => {
        let user = registerTextInput.value
        
        let errorMessage = document.getElementsByClassName('register-error-message')[0]
        
        userLength = user.length
        if(user.length >= 7){
            errorMessage.innerHTML = ''
            registerTextInput.style.borderColor = colorGreen
        } 
        else if(user.length === 0){
            errorMessage.innerHTML = ''
            registerTextInput.style.borderColor = colorLine
        }
        else {
            errorMessage.innerHTML = 'username minimal 7 kata'
            registerTextInput.style.borderColor = colorError
        } 
        setActiveRegister()
    })
    let registerEmailInput = document.getElementById('register-email')
    registerEmailInput.addEventListener('keyup', () => {
        let email = registerEmailInput.value
        
        let errorMessage = document.getElementsByClassName('register-error-message')[1]
        
        emailLength = email.length
        if(email.length >= 10){
            errorMessage.innerHTML = ''
            registerEmailInput.style.borderColor = colorGreen
        } 
        else if(email.length === 0){
            errorMessage.innerHTML = ''
            registerEmailInput.style.borderColor = colorLine
        }
        else {
            errorMessage.innerHTML = 'email minimal 10 kata'
            registerEmailInput.style.borderColor = colorError
        } 
        setActiveRegister()
    })
    
    let registerPassInput = document.getElementById('register-password')
    registerPassInput.addEventListener('keyup', () => {
        let pass = registerPassInput.value
        
        let errorMessage = document.getElementsByClassName('register-error-message')[2]
        
        emailLength = pass.length
        if(pass.length >= 10){
            errorMessage.innerHTML = ''
            registerPassInput.style.borderColor = colorGreen
            passInput = pass
        } 
        else if(pass.length === 0){
            errorMessage.innerHTML = ''
            registerPassInput.style.borderColor = colorLine
        }
        else {
            errorMessage.innerHTML = 'password minimal 10 kata'
            registerPassInput.style.borderColor = colorError
        } 
        
        setActiveRegister()
    })
    

    let registerConPassInput = document.getElementById('register-confirm-password')
    registerConPassInput.addEventListener('keyup', () => {
        let conPass = registerConPassInput.value
        
        let errorMessage = document.getElementsByClassName('register-error-message')[3]
        
        conPassLength = conPass.length
        conPassInput = conPass
        
        if(conPassInput == passInput){
            errorMessage.innerHTML = ''
            registerConPassInput.style.borderColor = colorGreen
            conPassInput = 
            isSame = false
        } 
        else if(conPass.length === 0){
            errorMessage.innerHTML = ''
            registerConPassInput.style.borderColor = colorLine
        }
        else {
            errorMessage.innerHTML = 'password dan confirm-password berbeda'
            registerConPassInput.style.borderColor = colorError
            isSame = true
        } 
        setActiveRegister()
    })
    

    let registerFemaleRadio = document.getElementById('register-male-radio')
    registerFemaleRadio.addEventListener('click', () => {
        console.log('clicked female')
        console.log(registerFemaleRadio.checked + ' ' + registerMaleRadio.checked)
        isRadioAnswer = true
        setActiveRegister()
    })
    let registerMaleRadio = document.getElementById('register-female-radio')
    registerMaleRadio.addEventListener('click', () => {
        console.log('clicked male')
        console.log(registerFemaleRadio.checked + ' ' + registerMaleRadio.checked)
        isRadioAnswer = true
        setActiveRegister()
    })

    let registerCheckbox = document.getElementById('register-checkbox')
    registerCheckbox.addEventListener('click', () => {
        console.log('checkbox ashiap')    
        console.log(registerCheckbox.checked)
        isCheckboxAnswer = registerCheckbox.checked        
        setActiveRegister()
    })
    

    let loginDirect = () => {
        let toogleLogin = document.getElementById('register-direct-login-toogle')
        toogleLogin.addEventListener('click', () =>{
            loginContainer.classList.add('show')
            registerContainer.classList.remove('show')
        })
    }
    
    registerButton.addEventListener('click', () =>{
        let errorMessage = document.getElementsByClassName('register-error-message')[4]
    
        if(!isCheckboxAnswer || !isRadioAnswer || isSame || userLength < 7 || emailLength < 10){
            console.log('kena validasi')
        } else {
            errorMessage.innerHTML = ''
            loginContainer.classList.add('show')
            registerContainer.classList.remove('show')
        }
        
    })

    loginDirect()
}

export { registerFunction }