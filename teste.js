
const botaoVerificar = document.getElementById('botao-verificar')
let resultadoLimpar = document.getElementById('resultado')
let resultado = document.getElementById('resultado')

function chamarNome(){
    let nomeUm =  document.getElementById('texto-verificar').value
    let nomeDois =  document.getElementById('texto-verificar-dois').value
    
    
    if(nomeUm == nomeDois){
        resultado.innerHTML = `${((nomeUm).toUpperCase())} seu nome é igual à ${nomeDois.toUpperCase()}`
    }else {
        resultado.innerHTML += `${(nomeUm).toUpperCase()} seu nome NÃO é  igual à ${nomeDois.toUpperCase()}`

        
    }


}


function limparResultado(){
    resultado.innerHTML = ''
}


botaoVerificar.addEventListener('click',chamarNome)
resultadoLimpar.addEventListener('mouseover',limparResultado)

