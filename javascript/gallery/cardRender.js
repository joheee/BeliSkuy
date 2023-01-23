let colorGreen = '#42b549'
let colorFont = 'rgba(49,53,59,0.68)'

// CARD SHOES RENDER
let cardRender = (cont, n , i) => {
    for(let j = 0; j < n; j++){
        let fetch = document.querySelector(cont).innerHTML
        document.querySelector(cont).innerHTML = 
        `<div class="card-item">
            <img src=${image[i]} alt="vans-1">
            <div class="card-info-container">
                <div class="card-title">${title[i]}</div>
                <div class="card-price">${price[i]}</div>
                <div class="card-item-discount-container">
                    <div class="card-discount-box">${discount[i]}</div>
                    <div class="card-discount-text">${normalPrice[i]}</div>
                </div>
                <div class="card-city-container">
                    <img class="card-city-icon" src="${icon[0]}" alt="official store">
                    <div class="card-city-text">${city[i]}</div>
                </div>
                <div class="card-sold-container">
                    <div class="fa-solid fa-star fa-xs"></div>
                    <div class="card-sold-text">${sold[i]}</div>
                </div>
            </div>
        </div>` + fetch
    }
}

let removeCard = (cont) => {
    
    let item = document.querySelector(cont)
    let child = item.lastElementChild
    while(child){
        item.removeChild(child)
        child = item.lastElementChild
    }
}
let removeAll = () => {
    removeCard(cont[0])
    removeCard(cont[1])
}

let titleInfo = (i) => {
    let editDiscount = document.getElementById('discount-info-title')
    editDiscount.innerHTML = product[i]
}

let product = ['"Semua"','"Vans"', '"Celana"', '"Baju"']

let cont = ['.card-shoes-discount-container',
            '.card-shoes-container']

let image = ['./public/cards/shoes/vans-1.jpg', 
            './public/cards/shoes/vans-2.jpg',
            './public/cards/pants/pants-1.jpg',
            './public/cards/pants/pants-2.png',
            './public/cards/shirts/shirts-1.jpg',
            './public/cards/shirts/shirts-2.jpg'] 
            
let title = ['Vans Slip On Classic Check board Global Original',
            'Vans Era C2H4 White Black / Vans Original 100% BNIB',
            'Short-Pant Fashion FOG Essentials DK-10',
            'Celana Chinos Panjang Pria Chino Cowok Ori Kual...',
            'Off White Blue Marker S/Slim T-shirt Black Blue 100%',
            'VM Kemeja Formal Polos Panjang Abu Slimfit']
            
let price = [   'Rp475.000', 
                'Rp889.000', 
                'Rp195.000',
                'Rp109.800',
                'Rp1.149.000',
                'Rp110.000']

let discount = ['37%', 
                '39%', 
                '32%',
                '40%',
                '20%',
                '31%']

let normalPrice = [ 'Rp750.000', 
                    'Rp3.499.000', 
                    'Rp225.000',
                    'Rp165.000',
                    'Rp3.800.000',
                    'Rp150.000']

let icon = ['./public/icon/official-store.png']

let city = ['Jakarta Barat', 
            'Bandung', 
            'Batam',
            'Bandung',
            'Jakarta Utara',
            'Jakarta Utara']

let sold = ['4.8 | Terjual 750+', 
            '5.0 | Terjual 2', 
            '3.6 | Terjual 2',
            '4.8 | Terjual 70+',
            '5.0 | Terjual 5',
            '4.6 | Terjual 80+']

//ALL
let galeryAll = (n, m) => {
    removeAll()
    titleInfo(0)
    // SHOES
    cardRender(cont[0], 2, 0)
    cardRender(cont[1], 6, 1)
    //PANTS
    cardRender(cont[0], 4, 2)
    cardRender(cont[1], 6, 3)
    // SHIRT  
    cardRender(cont[0], 4, 4)
    cardRender(cont[1], 8, 5)
}

// // SHOES
let galeryShoes = (n, m) => {
    removeAll()
    titleInfo(1)
    cardRender(cont[0], n, 0)
    cardRender(cont[1], m, 1)  
}

// //PANTS
let galeryPants = (n, m) => {
    removeAll()
    titleInfo(2)
    cardRender(cont[0], n, 2)
    cardRender(cont[1], m, 3)  
}

// // SHIRT 
let galeryShirts = (n, m) => {
    removeAll()
    titleInfo(3)
    cardRender(cont[0], n, 4)
    cardRender(cont[1], m, 5)  
}

let allButton = document.getElementsByClassName('all-button')
let shirtsButton = document.getElementsByClassName('shirts-button')
let pantsButton = document.getElementsByClassName('pants-button')
let shoesButton = document.getElementsByClassName('shoes-button')

let cardTrigger = (n, m) => {
    galeryAll(n, m)
    for(let i = 0; i < allButton.length; i++){
        allButton[i].style.color = colorGreen
        allButton[i].addEventListener('mousedown', () => {
            console.log(allButton[i])
            galeryAll(n, m)
            allButton[i].style.color = colorGreen
            shirtsButton[i].style.color = colorFont
            pantsButton[i].style.color = colorFont
            shoesButton[i].style.color = colorFont
        })
        
        shirtsButton[i].addEventListener('mousedown', () => {
            galeryShirts(n, m)
            allButton[i].style.color = colorFont
            shirtsButton[i].style.color = colorGreen
            pantsButton[i].style.color = colorFont
            shoesButton[i].style.color = colorFont
        })
        
        pantsButton[i].addEventListener('mousedown', () => {
            galeryPants(n, m)
            allButton[i].style.color = colorFont
            shirtsButton[i].style.color = colorFont
            pantsButton[i].style.color = colorGreen
            shoesButton[i].style.color = colorFont
        })
        
        shoesButton[i].addEventListener('mousedown', () => {
            galeryShoes(n, m)
            allButton[i].style.color = colorFont
            shirtsButton[i].style.color = colorFont
            pantsButton[i].style.color = colorFont
            shoesButton[i].style.color = colorGreen
        })
    }
}

let cardRenderModified = (cont, n , i) => {
    for(let j = 0; j < n; j++){
        let fetch = document.querySelector(cont).innerHTML
        document.querySelector(cont).innerHTML = 
        `<div class="card-item">
                
            <img src=${image[i]} alt="vans-1" class="card-item-image">
            <div class="card-info-container">
                <div class="card-city-container">
                    <img class="card-city-icon" src="${icon[0]}" alt="official store">
                    <div class="card-city-text">${city[i]}</div>
                </div>
                
                <div class="line-2"></div>
                
                <div class="card-title">${title[i]}</div>
                <div class="card-price">${price[i]}</div>
                <div class="card-item-discount-container">
                    <div class="card-discount-box">${discount[i]}</div>
                    <div class="card-discount-text">${normalPrice[i]}</div>
                </div>
                    
                    
                <div class="card-bottom-container">
                    <div class="card-sold-container">
                        <div class="fa-solid fa-star fa-xs"></div>
                        <div class="card-sold-text">${sold[i]}</div>
                    </div>
                    
                    <div class="card-buy-container">
                        <div class="fa-solid fa-circle-minus fa-sm"></div>
                        <div class="card-buy-text">1</div>
                        <div class="fa-solid fa-circle-plus fa-sm"></div>
                    </div>
                </div>
                    
            </div>
            
        </div>` + fetch
    }
}


let cartGallery = (n) => {
    removeCard(cont[0])
    for(let i = 0; i < n; i++){
            // SHOES
        cardRenderModified(cont[0], 1, 0)
        cardRenderModified(cont[0], 1, 1)
            //PANTS
        cardRenderModified(cont[0], 1, 2)
        cardRenderModified(cont[0], 1, 3)
            // SHIRT  
        cardRenderModified(cont[0], 1, 4)
        cardRenderModified(cont[0], 1, 5)
    }
}

export { cardTrigger, cartGallery }