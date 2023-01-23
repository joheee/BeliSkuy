let contain = 'main-chat-bubble-container'

let container = ['chat-bubble-npc',
            'chat-bubble-input']

let frame = ['text-input-npc',
            'text-input-chat']

let text = ['Selamat datang di HP Official store! Terima kasih telah menghubungi kami, mohon di tunggu sebentar, pesan kakak akan segera kami respon ya.',
            'Hai kak, untuk produk yang kakak cari saat ini lagi kosong kak',
            'Terima kasih telah menghubungi kami, mohon maaf saat ini kami sedang libur sementara waktu',
            'Kakak cakep kali',
            'Dua tiga alam baka, mohon maaf karyawan kami belum bangun semua',
            'Produk HP Pavilion ready stock nih kak',
            'Mohon dengan sabar menanti',
            'Di sini, kamu akan menemukan laptop kualitas PREMIUM, ORIGINAL dengan harga yang RAMAH BANGET!!',
            'Otw packing ya kak',
            'Kakak jomblo kak? kalo iya silahkan follow ig yang ada di footer ya kak',
            'Mohon maaf wifi admin lagi meledak',
            'Laptop HP murah dibeli cocok di hati',
            'Kita punya nih laptop couple untuk kamu dan pasangan kamu, tapi cari dulu ya pasangannya',
            'Jangan nunggu lama ya kak, ntar keburu diambil orang lho, si laptop maksudnya',
            'Liat doang beli kaga',]


let idx = 0
let npcRender = (cont, n) => {
    for(let j = 0; j < n; j++){
        let fetch = document.getElementsByClassName(cont)[0].innerHTML
        document.getElementsByClassName(cont)[0].innerHTML = 
       
        `<div class="${container[0]}">
            <div class="${frame[0]}">
                ${text[idx]}
            </div>
        </div>`
        
        + fetch
    }
    idx = (idx + 1) % text.length
}

let inputRender = (cont, n, input) => {
    for(let j = 0; j < n; j++){
        let fetch = document.getElementsByClassName(cont)[0].innerHTML
        document.getElementsByClassName(cont)[0].innerHTML = 
        
        `<div class="${container[1]}">
            <div class="${frame[1]}">
                ${input}
            </div>
        </div>`
        
        + fetch
    }
}

let chatBubbleRender = () => {
    npcRender(contain, 1)

    alert('cobain deh chat nya')

    let chatInput = document.getElementById('main-text-chat')
    let chatButton = document.getElementById('main-form-button-bubble')
    
    chatInput.addEventListener('keyup', (e) => {
        if(e.keyCode == 13 && chatInput.value.length > 0) renderChat()
    })
    
    chatButton.addEventListener('click', () => {
        if(chatInput.value.length > 0) renderChat()
    })
    
    let renderChat = () => {
        inputRender(contain, 1, chatInput.value)
        npcRender(contain, 1)
        chatInput.value = ''
    }
}

export { chatBubbleRender }