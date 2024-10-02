    function carregar(){
        var menssagem = window.document.getElementById('noticia')
        var img = window.document.getElementById('foto')
        var data = new Date()
        var hora = data.getHours()
        var hora = 
        menssagem.innerHTML = `Agora são ${hora} horas`
        if ( hora >= 0 && hora < 12 ){
            // BOM DIA
            img.scr = 'fotomanha.png'
        }
        else if(hora >= 12 && hora < 18 ){
            //BOA TARDE
            img.src = ' Projeto/fototarde.'
        }
        else {
            img.src = 'fotonoite.png'
        }
    }