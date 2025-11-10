export function exerciciosEstruturasRepeticao(): void {
    
    // ======================================================
    // 1️⃣ EXERCÍCIOS - ESTRUTURAS DE REPETIÇÃO
    // ======================================================
    
    console.log('🧠 Exercícios — Estruturas de Repetição');
 

    console.log('1️ Faça um loop for que mostre todos os números pares de 0 a 10.');

    for (let i = 0; i < 11; i++) {
        if (i % 2 ===0) {
            console.log('Números pares:', i)
        }
    }


    console.log('2️ Crie um loop while que conte de 5 até 0 e exiba "Contagem regressiva: X".');

    let contador: number = 5;
    while (contador >= 0) {
        console.log("Contagem regressiva:", contador);
        contador--;
    }


    console.log('3️ Escreva um loop do-while que simule 3 tentativas de login.');

    let tentativa: number = 0;
    do {
        console.log('Tentativa de login', (tentativa + 1));
        tentativa++;
    } while (tentativa < 3);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    console.log('🧠 Exercícios — Métodos de Array');
 

    console.log('4 Crie um array de nomes e use forEach para exibir cada nome em maiúsculas.');

    let nomes: string[] = ['Nini', 'Zarolhinho', 'Baby'];
    nomes.forEach(function(nome, indice) {
        console.log(nome.toUpperCase());
    })


    console.log('5 Crie um array de idades e use filter para retornar apenas as idades acima de 18.');

    let idades: number[] = [17, 18, 20, 21, 22, 28, 30, 43];
    let maiorDe18 = idades.filter(idade => idade > 18);
    console.log('Idade acima de 18 anos:', maiorDe18);


    console.log('6 Crie um array de números e use reduce para calcular a média.');

    let numeros: number[] = [56, 45, 32, 87, 67, 94];
    let media = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / numeros.length;
    console.log('Média dos números:', media);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    console.log('🧠 Exercícios — Funções Avançadas');
 

    console.log('7 Crie uma função que receba dois números e retorne a soma e o produto (usando tupla).');
    
    function calcularSomaEProduto(a: number, b: number): [number, number] {
        let soma = a + b;
        let produto = a * b;
        return [soma, produto];
    }
    let resultado = calcularSomaEProduto(34, 43);
    console.log('Soma dos números:', resultado[0]);
    console.log('Produto dos números:', resultado[1]);

    
    console.log('8 Crie uma função com valor padrão para calcular o preço total com desconto.');

    function calcularPreçoFinal(preco: number, desconto: number = 10): number {
        let precoFinal = preco - (preco * desconto / 100);
        return precoFinal;
    }
    console.log(calcularPreçoFinal(250));


    console.log('9 Crie uma função que receba uma frase e retorne um objeto com quantidade de palavras e caracteres.');

    function analisarFrase(frase: string): {palavras: number, caracteres: number} {
        let palavras = frase.split(" ").length;
        let caracteres = frase.length;
        return {
            palavras: palavras,
            caracteres: caracteres,
        };
    }
    let analise = analisarFrase("O rato roeu a rolha da garrafa de rum do rei da Rússia.");
    console.log(analise);

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
    console.log('🧠 Exercícios — Controlo de Loops');
 

    console.log('1️0 Use "continue" para pular números pares de 0 a 10.');

    for (let i = 0; i < 11; i++) {
        if (i % 2 === 0) {
            continue;
        }
        console.log('Números ímpares de 0 a 10:', i);
    }


    console.log('11 Use "break" para interromper um loop quando o número for maior que 7.');

    for (let i = 0; i < 100; i++) {
        if (i > 7) {
            break;
        }
        console.log(i);
    }


    console.log('12 Crie um loop que pare quando encontrar um número negativo em um array.');

    let lista: number[] = [8, 6, 4, 5, 7, 10, -1];
    for (let negativo of lista) {
        if (negativo < 0) {
            console.log('Loop interrompido devido a número negativo encontrado:', negativo);
            break;
        }
    }
};