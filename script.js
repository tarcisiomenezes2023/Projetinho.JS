function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fANO = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fANO.value.length == 0 || fANO.value > ano)
    window.alert('[ERROR] Verify the data and try again!')

    else {
        var fSEX = document.getElementsByName('radsex')
        var idade = ano - Number(fANO.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSEX[0].checked) {
            genero = 'Man'
            if (idade >= 0 && idade < 10) {
                /* crianca */
                img.setAttribute('src', 'pic-boy.jpg')
            } else if (idade < 21) {
                /* Jovem */
                img.setAttribute('src', 'pic-young-man.jpg')
            } else if (idade < 55){
                /* Adulto */
                img.setAttribute('src', 'man.jpg')

            } else {
                /* idoso */
                img.setAttribute('src', 'pic-Old-man.jpg')
            }
            

        } else if (fSEX[1].checked) {
            genero = 'Woman'
            if (idade >= 0 && idade < 10) {
                /* crianca */
                img.setAttribute('src', 'pic-girl.jpg')
            } else if (idade < 21) {
                /* Jovem */
                img.setAttribute('src', 'pic-young-girl.jpg')
            } else if (idade < 55){
                /* Adulto */
                img.setAttribute('src', 'pic-woman.jpg')

            } else {
                /* idoso */
                img.setAttribute('src', 'pic-Old-woman.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'We detected ' + genero + ' with ' + idade + ' years.'
        res.appendChild(img)
        img.setAttribute("style","border-radius: 50%" )
        img.setAttribute("width", "250")
        img.setAttribute("height", "250")

    }
}