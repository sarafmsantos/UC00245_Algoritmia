import { Component, OnInit } from '@angular/core';
import { analisarTexto, calcularTotal, criarUsuario } from './funcoes';
import { exerciciosEstruturasRepeticao } from './exercicios_aula03';

@Component({
  selector: 'app-aula03',
  imports: [],
  templateUrl: './aula03.html',
  styleUrl: './aula03.css'
})
export class aula03 implements OnInit {
  
  ngOnInit(): void {
    this.exemplosEstruturasRepeticao()
    this.exemplosMetodosArray()
    this.exemplosFuncoesAvancadas()
    exerciciosEstruturasRepeticao()
  }


  // ======================================================
  // 1️⃣ ESTRUTURAS DE REPETIÇÃO
  // ======================================================
  exemplosEstruturasRepeticao(): void {
    console.log('--- Estruturas de Repetição ---');
 
    // FOR (para)
    // Estrutura: for(inicialização; condição; incremento)
    // Ideal quando se sabe antecipadamente quantas iterações serão necessárias
    for (let i = 0; i < 3; i++) {
      console.log(`for → Iteração: ${i}`);
    }
    // Funcionamento:
    // 1. let i = 0 → Executa UMA vez no início
    // 2. i < 3 → Verifica ANTES de cada iteração
    // 3. console.log(...) → Executa o bloco de código
    // 4. i++ → Executa APÓS cada iteração
    // 5. Repete passos 2-4 até a condição ser falsa
 
    // WHILE (enquanto)
    // Estrutura: while(condição)
    // Ideal quando NÃO se sabe quantas iterações serão necessárias
    let contador = 0;
    while (contador < 3) {
      console.log(`while → Contador: ${contador}`);
      contador++; // Importante: incrementar manualmente para evitar loop infinito
    }
    // Funcionamento:
    // 1. Verifica condição ANTES de executar o bloco
    // 2. Se verdadeira, executa bloco de código
    // 3. Repete até condição ser falsa
    // CUIDADO: Se esquecer do contador++, entra em loop infinito!
 
    // DO-WHILE (faça-enquanto)
    // Estrutura: do { código } while(condição)
    // Garante que o bloco execute PELO MENOS UMA VEZ
    let x = 0;
    do {
      console.log(`do-while → Passo: ${x}`);
      x++;
    } while (x < 2);
    // Funcionamento:
    // 1. Executa o bloco de código PRIMEIRO
    // 2. DEPOIS verifica a condição
    // 3. Se verdadeira, repete o processo
    // Útil quando o código precisa executar pelo menos uma vez
  }


  // ======================================================
  // 2️⃣ ESTRUTURAS Exemplos Metodos e Arrays
  // ======================================================
  exemplosMetodosArray(): void {
    console.log('--- Métodos de Array ---');
 
    const produtos = ['telemóvel', 'tablet', 'portátil'];
 
    // forEach: Executa uma função para cada elemento do array
    // Não retorna um novo array, apenas itera sobre os elementos
    // p = elemento atual, i = índice do elemento
    produtos.forEach((p, i) => console.log(`forEach → ${i + 1}: ${p}`));
 
    const precos = [100, 200, 300];
 
    // map: Cria um NOVO array com os resultados da função aplicada a cada elemento
    // Transforma cada elemento do array original
    // Neste caso: aplica 10% de desconto em cada preço
    const desconto = precos.map((p) => p * 0.9);
    console.log('map → Preços com desconto:', desconto);
 
    // filter: Cria um NOVO array apenas com os elementos que passam no teste
    // Retorna apenas os elementos onde a condição retorna true
    // Neste caso: preços maiores que 150
    const filtrados = precos.filter((p) => p > 150);
    console.log('filter → Maiores que 150:', filtrados);
 
    // find: Retorna o PRIMEIRO elemento que satisfaz a condição
    // Se nenhum elemento for encontrado, retorna undefined
    // Neste caso: primeiro preço acima de 250
    const encontrado = precos.find((p) => p > 250);
    console.log('find → Primeiro acima de 250:', encontrado);
 
    // reduce: Executa uma função redutora em cada elemento, resultando em um único valor
    // acc = acumulador (valor anterior), val = valor atual
    // 0 = valor inicial do acumulador
    // Neste caso: soma todos os preços começando de 0
    const soma = precos.reduce((acc, val) => acc + val, 0);
    console.log('reduce → Soma total:', soma);
  }


  // ======================================================
  // 3️⃣ FUNÇÕES AVANÇADAS
  // ======================================================
  exemplosFuncoesAvancadas(): void {
    console.log('--- Funções Avançadas ---');
 
    console.log('criarUsuario("Ana", 25):', criarUsuario('Ana', 25)); // Com idade
    console.log('criarUsuario("João"):', criarUsuario('João')); // Sem idade (usa padrão)
 
    /************************************ */
 
    console.log('calcularTotal(10):', calcularTotal(10)); // Usa qtd padrão = 1
    console.log('calcularTotal(10, 3):', calcularTotal(10, 3)); // Usa qtd fornecida = 3
 
    /************************************ */
    console.log(
      'analisarTexto("Olá Mundo TypeScript"):',
      analisarTexto('Olá Mundo TypeScript') // Retorna [3, 20] (3 palavras, 20 caracteres)
    );
  }


  // ======================================================
  // 4️⃣ CONTROLO DE LOOPS
  // ======================================================
  exemplosControleLoops(): void {
    console.log('--- Controle de Loops ---');
 
    // Loop for tradicional:
    // let i = 0 → inicialização (executa uma vez no início)
    // i < 5 → condição (verificada antes de cada iteração)
    // i++ → expressão de incremento (executa após cada iteração)
    for (let i = 0; i < 5; i++) {
      // CONTINUE: Pula para a próxima iteração do loop
      // Quando i === 2, o código abaixo do 'continue' não é executado
      // O loop continua com a próxima iteração (i = 3)
      if (i === 2) {
        continue
      };
 
      // BREAK: Interrompe completamente o loop
      // Quando i === 4, o loop é finalizado imediatamente
      // Nenhuma iteração adicional será executada
      if (i === 4) break;
 
      // Este console.log só será executado quando:
      // i !== 2 (por causa do continue) E i < 4 (por causa do break)
      console.log(`Processando número: ${i}`);
    }
  }
}
