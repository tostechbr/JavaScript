function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'bebe m.jpg'
        document.body.style.backgroundColor = '#E0DAFF'
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE
        img.src = 'bebe-m.jpg'
        document.body.style.backgroundColor = '#CCE7F8'
    } else {
        //BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#D6FAF7'
    }

}