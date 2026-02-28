alert('Boas vinda ao jogo do numero secreto !!');

let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute

let tentativas = 1

console.log('Numero secreto: ', numeroSecreto);

// Enquanto o chute não for igual ao numero secreto
// !=  diferente de
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);

    if (numeroSecreto == chute) {
        break; // se acertar de primeira.
    } else{ 
        if (numeroSecreto > chute){
            alert(`O numero secreto é maior que ${chute}.`);
        } else {
            alert(`O numero secreto é menor que ${chute}.`);
        }

    }

    tentativas ++ ;
    
}

// se acertar de primeira, tentativa fica no singular.
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Voce descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.` );



