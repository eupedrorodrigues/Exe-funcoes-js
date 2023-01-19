// Questão 1
/*
function inteiros(a,b){

    if(a != 0 && b != 0){

        document.write('Seu valor é: ', a/b);

    }else if(a == 0 || b == 0 ){

        document.write('Valor inválido!');

    }
}

let a =  Number(prompt('Insira um valor: '));
let b = Number(prompt('Insira outro valor: '));

inteiros(a,b);
*/


//Questão 2
/*
function triangulo(l1,l2,l3){

    if(l1==l2 && l1 == l3){
        document.write('Seu triângulo é: Equilátero');
    }else if(l1 == l2 || l1==l3 || l2==l3){
        document.write('Seu triângulo é: Isósceles');
    }else if(l1!=l2 && l1!=l3){
        document.write('Seu triângulo é: Escaleno');
    }
}
let l1 = prompt('Digite o lado 1: ');
let l2 = prompt('Digite o lado 2: ');
let l3 = prompt('Digite o lado 3: ');

triangulo(l1,l2,l3);*/


// Questão 3
/*
function cliente(valor){

    if(valor<=500){
        document.write('Você obteve um desconto! '+'<br>'+'Você teve um desconto de:',valor*0.1+'<br>'+ 'Seu novo valor é de: ', valor*0.9);
    }else{
        document.write('Você obteve um desconto! '+'<br>'+'Você teve um desconto de:',valor*0.15+'<br>'+ 'Seu novo valor é de: ', valor*0.85);
    }

}
let valor = Number(prompt('Digite o valor das compras: '));

cliente(valor);*/


// Questão 4 
/*
function pagamento(total,valor){

    if(total == 1){
        document.write('Você obteve um desconto! '+'<br>'+'Você teve um desconto de:',valor*0.1 +'<br>'+ 'Seu novo valor é de: ', valor*0.9);
    }
    else if(total == 2){
        document.write('Seu valor total é de: ', valor + '<br>' +'Você pode parcelar em até 2x: ', valor/2)
    }
    else if(total == 3 && valor > 100) {

        document.write('Seu valor total é de: ', valor + '<br>' +'Você pode parcelar em 3x ou até 10x:' + '<br>' + 
        'Em 3x: ', (valor+valor*3/100*3).toFixed(2) + '<br>' + 
        'Em 4x: ', (valor+valor*3/100*4).toFixed(2) + '<br>' +
        'Em 5x: ', (valor+valor*3/100*5).toFixed(2) + '<br>' +
        'Em 6x: ', (valor+valor*3/100*6).toFixed(2) + '<br>' +
        'Em 7x: ', (valor+valor*3/100*7).toFixed(2) + '<br>' +
        'Em 8x: ', (valor+valor*3/100*8).toFixed(2) + '<br>' +
        'Em 9x: ', (valor+valor*3/100*9).toFixed(2) + '<br>' + 
        'Em 10x: ', (valor+valor*3/100*10).toFixed(2) + '<br>' )
  }
 
  else{
    document.write('Opção inválida!')
}

}
   

let total =  prompt('1- A vista   2- Em até 2x   3- Pode parcelar em 3x até 10x ');
let valor = Number(prompt('Digite o valor da sua compra: '));

pagamento(total,valor);*/
 


//Questão 5
/*
  function grego(linha,col,aux){
    aux = col
    while(linha>0){
        while(col>0){
            document.write('*')
            colunas--
        }
        document.write('<br>')
        col = aux
        linha--
    }
}

linha = Number(prompt('Digite a quantidade de linhas:'))
col = Number(prompt('Digite a quantidade de colunas:'))

grego(linha,col)
*/


// Questão 6
/*
function potencia(b,n){
    
    document.write('O valor do cálculo é: ', b**n)
}

let b = Number(prompt('Digite o valor da base: ' ));
let n = Number(prompt('Digite o valor do expoente: ' ));

potencia(b,n);*/


// Questão 7 (Olhar no console do vs)
/*
function array(caixa,valor,resposta,index){
    while(resposta != 3){
        while(resposta == 1){
            valor = prompt('Digite o valor a ser inserido no vetor:');
            caixa.push(valor);
            resposta = prompt('Escolha uma das opções a seguir: \n 1- Inserir \n 2- Buscar \n 3- Encerrar ');
        }
        while(resposta == 2){
            valor = prompt('Digite o valor a ser buscado no vetor: ');
            index = caixa.indexOf(valor, 0);
            console.log(caixa);
            if(index>=0){
                alert('Valor existe e está na posição: '+ index);
            } else {
                alert('Valor desejado não existe!');
            }
            resposta = prompt('Escolha uma das opções a seguir: \n 1- Inserir \n 2- Buscar \n 3- Encerrar ');
        }
    }
    alert('Programa encerrado!')
}

resposta = prompt('Deseja quais das opções a seguir: \n 1- Inserir \n 2- Buscar')
valor = 0
index = 0

array([],valor,resposta,index);*/

