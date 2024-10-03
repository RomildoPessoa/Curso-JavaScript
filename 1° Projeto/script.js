    function carregar(){
        var menssagem = window.document.getElementById('noticia')
        var img = window.document.getElementById('imagem')
        var data = new Date()
        var hora = data.getHours()
        //var hora = 13
        menssagem.innerHTML = `Agora são ${hora} horas`
        if ( hora >= 0 && hora < 12 ){
            // BOM DIA
            img.scr = 'fotomanha.png'
            document.body.style.background= '#e2cd9f'
        }
        else if(hora >= 12 && hora < 18 ){
            //BOA TARDE
            img.src = 'fototarde.png'
            document.body.style.background = '#b9846f'
        }
        else {
            img.src = 'fotonoite.png'
            document.body.style.background = '#515154'
        }
    }