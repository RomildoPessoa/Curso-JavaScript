function verificar(){
    //window.alert('fui')}
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    
    if (fano.value. length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
         
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number (fano.value);
        res.innerHTML = `Sua idade é: ${idade}`;
        
    }
    var genero = ''
    var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
    
    if (fsex [0].checked){
        genero = 'homem'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'foto-criança-homem.png')
        }
        else if(idade < 21){
            //juvem
            img.setAttribute('src', 'foto-homem-jovem.png')
        }
        else if (idade < 50){
            //adulto
            img.setAttribute('src', 'foto-homem.png')
        }
        else{
            //idoso
            img.setAttribute('src', 'foto-idoso-homem.png')
        }
    } 

    else if (fsex[1].checked){
        genero = 'mulher'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'foto-criança-mulher.png')
        }
        else if(idade < 21){
            //juvem
            img.setAttribute('src', 'foto-mulher-jovem.png')
        }
        else if (idade < 50){
            //adulto
            img.setAttribute('src', 'foto-mulher-adulta.png')
        }
        else{
            //idoso
            img.setAttribute('src', 'foto-mulher-idosa.png')
        }
    }


    res.style.testAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}

        

    