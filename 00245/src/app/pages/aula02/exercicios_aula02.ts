
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
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
      }
    }  
  }
 
 
export function exercicioFuncoes2(): void {
    console.log('--- Exercícios: Funções ---');
    
    console.log('1️⃣ Crie uma função que receba dois números e retorne o maior.');

    function maiorNumero(a: number, b: number): number {
      if (a > b) {
        return a;
      } else {
        return b;
      }
    }
    console.log(maiorNumero(10, 25));

    console.log('2️⃣ Escreva uma função que calcule a média de um array de números.');
    
    function calcularMedia(numeros: number[]): number {
      let soma = 0;
      for (let numero of numeros) {
        soma += numero;
      }
      return soma / numeros.length;
    }
    let conjunto = [11, 22, 33, 44];
    console.log(calcularMedia(conjunto));
    
    console.log('3️⃣ Crie uma função que receba um nome e exiba uma saudação personalizada.');

    function saudacao(nome: string): void {
      console.log('Olá,', nome, '! Bem-vindo/a!');
    }
    saudacao('Tony');
   }
   
   
export function exercicioCombinacao2(): void {  
    console.log('--- Exercícios: Combinação de Conceitos ---');

    console.log('1️⃣ Crie uma função que receba um array de notas e mostre quantos alunos foram aprovados.');

    function alunosAprovados(notas: number[]): void {
      let aprovados = 0;
      for (let nota of notas) {
        if (nota >= 10) {
          aprovados++;
        }
      }
    console.log('Número de alunos aprovados:', aprovados);
    }
    let notasAlunos = [8, 12, 15, 9, 14, 10, 7];
    alunosAprovados(notasAlunos);

    console.log('2️⃣ Desenvolva um sistema que calcule o total de uma compra com base em arrays de produtos e preços.');

    function calcularTotalCompra(produtos: string[], precos: number[]): void {
      if (produtos.length !== precos.length) {
        console.log('Erro: o número de produtos não corresponde ao número de preços.');
        return;
      }
      let total = 0;
      for (let i = 0; i < produtos.length; i++) {
        total += precos[i];
        console.log(produtos[i], precos[i]);
        console.log('Total da compra:', total, 'euros');
      }
    }
    let produtos = ['maçãs', 'bananas', 'pão', 'bebida aveia'];
    let precos = [0.99, 1.20, 1.50, 1.10];
    calcularTotalCompra(produtos, precos);

    console.log('3️⃣ Combine estruturas condicionais e arrays para exibir mensagens diferentes com base em resultados.');

    function avaliarNotas(notas: number[]): void {
      for (let i = 0; i < notas.length; i++) {
      let nota = notas[i];
        if (nota >= 90) {
        console.log('Nota:', nota, '- Excelente');
        } else if (nota >= 80) {
        console.log('Nota:', nota, '- Muito Bom');
        } else if (nota >= 65) {
        console.log('Nota:', nota, '- Bom');
        } else if (nota >= 50) {
        console.log('Nota:', nota, '- Suficiente');
        } else {
        console.log('Nota:', nota, '- Reprovado');
        }
      }
    }
    let notas = [95, 52, 79, 64, 46];
    avaliarNotas(notas);
}
