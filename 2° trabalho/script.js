function verificar(){
    //window.alert('fui')}
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    
    if (fano.value. length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fano = document.getElementsByName('radsex')
        var idade = ano - Number('fano.value')
        res.innerHTML =`Sua idade é: ${idade}`
    }
    }