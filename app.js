function carregar(){
let msg = document.getElementById('msg')
let imagem = document.getElementById('imagem')
let data = new Date()
let hora = data.getHours()
// let hora  = 7
msg.innerHTML = `agora são ${hora} horas`
if (hora >= 0 && hora < 12){
    imagem.src = 'img1.jpg'
    document.body.style.background = '#f0bb9d'
}else if (hora >= 12 && hora <= 18){
    imagem.src = 'img2.jpg'
    document.body.style.background = '#f87427'
}else {
    imagem.src = 'img3.jpg'
    document.body.style.background = '#6d7a82'
}
}
