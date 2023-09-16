function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value > ano || fano.value == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        let fsex = window.document.getElementsByName('radsex')
        let idade = ano - fano.value
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-crianca-homem.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'foto-jovem-homem.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'foto-adulto-homem.jpg')
            } else {
                img.setAttribute('src', 'foto-idoso-homem.jpg')
            }
            
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-crianca-mulher.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'foto-jovem-mulher.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'foto-adulta-mulher.jpg')
            } else {
                img.setAttribute('src', 'foto-idosa-mulher.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade}`

        res.appendChild(img)

    }
}