
let n1,n2
let opcao 
let confirme=true
function adicao(n1,n2){

   let soma= n1+n2

    return soma
}

function subtracao(n1,n2){

    let menos= n1-n2
 
     return menos
 }

 function multiplicacao(n1,n2){

    let multiplicar= n1*n2
 
     return multiplicar
 }

 function divisao(n1,n2){

    let dividir= n1/n2
 
     return dividir
 }


 while(confirme){


    opcao= Number(prompt("Digite 1 soma\n 2 subtração \n 3 multiplicação \n 4 divisao\n "))

    n1=Number(prompt("Digite o primeiro numero"))
    n2=Number(prompt("Digite o primeiro numero"))

    if(opcao==1){

        console.log(adicao(n1,n2))
    }

    else if(opcao==2){

        console.log(subtracao(n1,n2))
    }

    else if(opcao==3){

        console.log(multiplicacao(n1,n2))
    }

    else if(opcao==4){

        console.log(divisao(n1,n2))
    }

     confirme=confirm("Deseja continuar?")
 }

 

