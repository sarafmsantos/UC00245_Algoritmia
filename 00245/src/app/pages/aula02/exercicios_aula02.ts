

export function exercicioArrays2(): void {
    console.log('--- Exercícios: Arrays ---');

    console.log('1️⃣ Crie um array de 5 nomes e exiba cada um no console.');

    let animais: string[] = ['cão', 'gato', 'canário', 'camaleão', 'cavalo'];
    console.log(animais[0]);
    console.log(animais[1]);
    console.log(animais[2]);
    console.log(animais[3]);
    console.log(animais[4]);

    console.log('2️⃣ Adicionar e remover elementos de um array.');

    animais.unshift('peixe');
    animais.push('aranha');
    console.log(animais);
    animais.shift();
    animais.pop();
    console.log(animais);

    console.log('3️⃣ Crie um array de números e imprima somente os números pares.');

    let numeros: number[] = [200, 201, 202, 203, 204, 205, 206, 207, 208];
    let numerosPares = numeros.filter((num) => num % 2 === 0);
    console.log("Números pares:", numerosPares);
  }
 
 
export function exercicioFuncoes2(): void {
    console.log('--- Exercícios: Funções ---');
    console.log(
      '1️⃣ Crie uma função que receba dois números e retorne o maior.'
    );
    console.log(
      '2️⃣ Escreva uma função que calcule a média de um array de números.'
    );
    console.log(
      '3️⃣ Crie uma função que receba um nome e exiba uma saudação personalizada.'
    );
   }
   
   
export function exercicioCombinacao2(): void {  
    console.log('--- Exercícios: Combinação de Conceitos ---');
    console.log(
      '1️⃣ Crie uma função que receba um array de notas e mostre quantos alunos foram aprovados.'
    );
    console.log(
      '2️⃣ Desenvolva um sistema que calcule o total de uma compra com base em arrays de produtos e preços.'
    );
    console.log(
      '3️⃣ Combine estruturas condicionais e arrays para exibir mensagens diferentes com base em resultados.'
    );
}
