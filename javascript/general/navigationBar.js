// COLOR
let colorGreen = '#42b549'
let colorLine = '#D3DEDC'

// SEARCH GLOW
let searchGlow = () => {
    let searchBar = document.getElementById('search-item-input')
    searchBar.addEventListener('focus', () => {
        document.getElementById('search-item-input').style.borderBottomColor = colorGreen
        document.getElementById('search-item-input').style.borderLeftColor = colorGreen
        document.getElementById('search-item-input').style.borderTopColor = colorGreen
        
        document.getElementById('search-item-button').style.borderBottomColor = colorGreen
        document.getElementById('search-item-button').style.borderRightColor = colorGreen
        document.getElementById('search-item-button').style.borderTopColor = colorGreen
    })
    searchBar.addEventListener('blur', () =>{
        document.getElementById('search-item-input').style.borderBottomColor = colorLine
        document.getElementById('search-item-input').style.borderLeftColor = colorLine
        document.getElementById('search-item-input').style.borderTopColor = colorLine
        
        document.getElementById('search-item-button').style.borderBottomColor = colorLine
        document.getElementById('search-item-button').style.borderRightColor = colorLine
        document.getElementById('search-item-button').style.borderTopColor = colorLine
    })
}

let cartLoad = () => {
    let cartButton = document.getElementById('go-to-cart')
    cartButton.addEventListener('click', () =>{
        window.location.href = '../../cart.html'
    })    
}

// PROFILE DROPDOWN
let profileDropdown = () =>{
    let profileDrop = document.getElementsByClassName('navbar-profile-container')[0]
    let profileContainerDrop = document.getElementsByClassName
    ('navbar-profile-dropdown-container')[0]
    let grayScreen = document.getElementsByClassName('gray-screen-container')[0]
    
    profileDrop.addEventListener('mouseover', () => {
        profileContainerDrop.classList.toggle('show')
        grayScreen.classList.toggle('show')
    })
    profileDrop.addEventListener('mouseout', () => {
        profileContainerDrop.classList.toggle('show')
        grayScreen.classList.toggle('show')
    })
}

// ENVELOPE DROPDOWN
let envelopeDropdown = () =>{
    let envelopeDrop = document.getElementsByClassName('navbar-item-icon-envelope')[0]
    let envelopeContainerDrop = document.getElementsByClassName('navbar-item-icon-envelope-container')[0]
    let grayScreen = document.getElementsByClassName('gray-screen-container')[0]
    
    envelopeDrop.addEventListener('mouseover', () => {
        envelopeContainerDrop.classList.toggle('show')
        grayScreen.classList.toggle('show')
    })
    envelopeDrop.addEventListener('mouseout', () => {
        envelopeContainerDrop.classList.toggle('show')
        grayScreen.classList.toggle('show')
    })
}

let responsiveNavbar = () => {
    let responsiveButton = document.getElementsByClassName('navbar-responsive-bars')[0]
    
    let grayScreen = document.getElementsByClassName('gray-screen-container')[0]
    let responsiveNavbar = document.getElementsByClassName('navbar-responsive-dropdown-container')[0]
    
    responsiveButton.addEventListener('mouseover', () =>{
        grayScreen.classList.toggle('show')
        responsiveNavbar.classList.toggle('show')
    }) 
    responsiveButton.addEventListener('mouseout', () =>{
        grayScreen.classList.toggle('show')
        responsiveNavbar.classList.toggle('show')
    }) 
}


let navigationBarRender = () => {
    searchGlow()
    profileDropdown()
    envelopeDropdown()
    cartLoad()
    responsiveNavbar()
}

export { navigationBarRender }