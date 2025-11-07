import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula01',
  imports: [],
  templateUrl: './aula01.html',
  styleUrl: './aula01.css'
})
export class aula01 implements OnInit {

variavelGlobal: string = "";
variavelGlobal2!: string;
variavelGlobal3: number = 0;
arrayGlobal: string[] = [];

  ngOnInit(): void {
    let teste = '';
    const nome = '';
    
    this.exemploVariaveisETipos();
    this.exemploVariaveisEtipos2();
    this.exemploOperadoresAritmeticos();
    this.exemploOperadoresComparacao();
    this.exemploOperadoresLogicos();
    this.demonstrarReferencias();
    this.exerciciosparafazer();
  }

// ======================================================
// 🔹 1. VARIÁVEIS E TIPOS DE DADOS
// ======================================================
exemploVariaveisETipos(): void {
    console.log('\n🧩 1️⃣ VARIÁVEIS E TIPOS DE DADOS');
    console.log('--------------------------------');

    // 📘 Exemplo de código:
 
    let nome1: string = 'João';
    let idade1: number = 25;
    const ativo1: boolean = true;
    const valor: any = 'pode ser qualquer tipo';
    this.variavelGlobal = "São as que começam dom THIS."
 
    console.log(nome1, idade1, ativo1, valor, this.variavelGlobal);
}

exemploVariaveisEtipos2 = () => {
 console.log('\n🧩 1️⃣ VARIÁVEIS E TIPOS DE DADOS');
    console.log('--------------------------------');
 
    // 📘 Exemplo de código:
 
    let nome1: string = 'João';
    let idade1: number = 25;
    const ativo1: boolean = true;
    const valor: any = 'pode ser qualquer tipo';
    this.variavelGlobal = 'São as que começam dom THIS.';
 
    console.log(nome1, idade1, ativo1, valor, this.variavelGlobal);
  }

// ======================================================
// 🔹 2. OPERADORES ARITMÉTICOS
// ======================================================
exemploOperadoresAritmeticos(): void {
  console.log('\n🧩 2️⃣ OPERADORES ARITMÉTICOS');
  console.log('--------------------------------');
 
  // 📘 Exemplo de código:
 
  let num1 = 10;
  let num2 = 3;
 
  console.log(num1 + num2); // Adição
  console.log(num1 - num2); // Subtração
  console.log(num1 * num2); // Multiplicação
  console.log(num1 / num2); // Divisão
  console.log(num1 % num2); // Resto da divisão
}

// ======================================================
// 🔹 3. OPERADORES DE COMPARAÇÃO
// ======================================================
 
exemploOperadoresComparacao(): void {
  console.log('\n🧩 3️⃣ OPERADORES DE COMPARAÇÃO');
  console.log('--------------------------------');
 
  // 📘 Exemplo de código:
 
  let x = 5;
  let y = 10;
 
  console.log(x == y); // Igualdade
  console.log(x != y); // Diferença
  console.log(x > y); // Maior que
  console.log(x < y); // Menor que
  console.log(x >= y); // Maior ou igual
  console.log(x <= y); // Menor ou igual
  }

// ======================================================
// 🔹 4. OPERADORES LÓGICOS
// ======================================================

exemploOperadoresLogicos(): void {
  console.log('\n🧩 4 OPERADORES LÓGICOS');
  console.log('--------------------------------');

  // 📘 Exemplo de código:

  let temIdade1 = true;
  let temCartao1 = false;

  console.log(temIdade1 && temCartao1); // E (AND)
  console.log(temIdade1 || temCartao1); // OU (OR)
  console.log(!temIdade1); // NÃO (NOT)
}

demonstrarReferencias() {
  console.log('=== DEMONSTRAÇÃO DE REFERÊNCIAS DE MEMÓRIA ===');
 
    // 1. Tipos primitivos - Cópia por VALOR
    console.log('\n1. TIPOS PRIMITIVOS (Cópia por VALOR):');
    let a = 10;
    let b = a; // Cópia do valor
    console.log('Antes da modificação:');
    console.log('a =', a, 'b =', b);
 
    b = 20; // Modifica apenas b
    console.log('Depois de modificar b:');
    console.log('a =', a, 'b =', b); // a mantém o valor original
 
    // 2. Objetos - Cópia por REFERÊNCIA
    console.log('\n2. OBJETOS (Cópia por REFERÊNCIA):');
    const obj1 = { nome: 'João do Obj1', idade: 30 };
    const obj2 = obj1; // Cópia da referência (mesmo endereço de memória)
 
    console.log('Antes da modificação:');
    console.log('obj1 =', obj1);
    console.log('obj2 =', obj2);
 
    obj2.idade = 35; // Modifica ambos!
    obj2.nome = 'tony do obj2'; //Mudando nome do Objeto 2
 
    console.log('Depois de modificar obj2.idade e obj2.nome:');
    console.log('obj1 =', obj1); // Também foi modificado!
    console.log('obj2 =', obj2);
 
    // 3. Arrays - Também por referência
    console.log('\n3. ARRAYS (Cópia por REFERÊNCIA):');
    const arr1 = [1, 2, 3];
    const arr2 = arr1; // Mesma referência
 
    console.log('Antes da modificação:');
    console.log('arr1 =', arr1);
    console.log('arr2 =', arr2);
 
    arr2.push(4); // Modifica ambos arrays
    console.log('Depois de arr2.push(4):');
    console.log('arr1 =', arr1); // Também modificado!
    console.log('arr2 =', arr2);
 
    // 4. Comparação de referências
    console.log('\n4. COMPARAÇÃO DE REFERÊNCIAS:');
    console.log('obj1 === obj2:', obj1 === obj2); // true - mesma referência
    console.log('arr1 === arr2:', arr1 === arr2); // true - mesma referência
 
    const obj3 = { nome: 'João', idade: 35 }; // Objeto igual mas diferente referência
    console.log('obj1 === obj3:', obj1 === obj3); // false - referências diferentes
 
    // 5. Cópia real (deep copy)
    console.log('\n5. CÓPIA REAL (Deep Copy):');
    const original = { x: 10, y: 20 };
    const copiaReal = JSON.parse(JSON.stringify(original)); // Deep copy
    console.log('original === copiaReal são iguais em referencia ?', original === copiaReal); // false - mesma referência
    console.log('original === copiaReal são iguais em conteudo ?', original.x === copiaReal.x); // true - no mesmo conteudo
 
    console.log('original =', original);
    console.log('copiaReal =', copiaReal);
 
    copiaReal.x = 99;
    console.log('Depois de modificar copiaReal.x:');
    console.log('original =', original); // Não modificado!
    console.log('copiaReal =', copiaReal); // Apenas este foi modificado
 
    // 6. Cópia superficial (shallow copy)
    console.log('\n6. CÓPIA SUPERFICIAL (Shallow Copy):');
    const objCompleto = {
      dados: { valor: 100 },
      lista: [1, 2, 3],
    };
 
    const shallowCopy = { ...objCompleto }; // Spread operator - shallow copy
 
    console.log('Original:', objCompleto);
    console.log('Shallow Copy:', shallowCopy);
 
    shallowCopy.dados.valor = 999; // Modifica ambos!
    shallowCopy.lista.push(4); // Modifica ambos!
 
    console.log('Depois de modificar shallowCopy:');
    console.log('Original:', objCompleto); // Foi modificado nos objetos internos!
    console.log('Shallow Copy:', shallowCopy);
 
    console.log('\n=== FIM DA DEMONSTRAÇÃO ===');
  }

/***************************Exercícios *********************************/

exerciciosparafazer = () =>{
    // 💪 Exercício 1
    console.log('👉 Exercício 1: Declare 3 variáveis: nome (string), idade (number) e ativo (boolean). Mostre-as no console.');
    
    let nome = "sara";
    let idade = 43;
    let ativo = false;

    console.log(nome);
    console.log(idade);
    console.log(ativo);

    // 💪 Exercício 2
    console.log('👉 Exercício 2: Crie uma variável cidade e depois altere seu valor.');
    
    let cidade = "Setúbal";
    console.log(cidade);

    cidade = "Torrão";
    console.log(cidade);

    // 💪 Exercício 3
    console.log('👉 Exercício 3: Crie uma variável do tipo any e mude seu tipo três vezes.');
    
    let valor: any = 0;
    console.log(valor);
    valor = "sara";
    console.log(valor);
    valor = false;
    console.log(valor);

    // 💪 Exercício 4
    console.log('👉 Exercício 4: Crie duas variáveis e mostre no console a soma e subtração delas.');
      
    let num1 = 23;
    console.log(num1);
    let num2 = 78;
    console.log(num2);
    console.log(num1 + num2);
    console.log(num2 - num1);

    // 💪 Exercício 5
    console.log('👉 Exercício 5: Calcule a área de um retângulo (largura * altura).');
      
    let largura = 30;
    console.log(largura);
    let altura = 20;
    console.log(altura);
    let area = largura * altura;
    console.log(area);

    // 💪 Exercício 6
    console.log('👉 Exercício 6: Mostre o resto da divisão de 20 por 6.');
    
    let resto = 20 % 6;
    console.log(resto);

    // 💪 Exercício 7
    console.log('👉 Exercício 7: Compare dois números e diga se são iguais.');

    let Num1 = 79;
    let Num2 = 97;
    console.log(Num1, 'é igual a', Num2, '?', Num1 === Num2);

    // 💪 Exercício 8
    console.log('👉 Exercício 8: Compare se um número é maior que o outro.');

    let a = 79;
    let b = 97;
    console.log(b, 'é maior que', a, '?', b > a);

    // 💪 Exercício 9
    console.log('👉 Exercício 9: Compare se dois textos são diferentes.');

    let texto1 = 'Olá';
    let texto2 = 'olá';
    console.log(texto1, 'é diferente de', texto2, '?', texto1 !== texto2);

    // 💪 Exercício 10
    console.log('👉 Exercício 10: Verifique se uma pessoa pode conduzir (temIdade && temCarta).');

    let temIdade = true;
    let temCarta = false;
    console.log('A pessoa pode conduzir?', temIdade && temCarta);

    // 💪 Exercício 11
    console.log('👉 Exercício 11: Verifique se o acesso é permitido (logedIn || admin).');

    let logedIn = false;
    let admin = true;
    console.log('O acesso é permitido?', logedIn || admin);

    // 💪 Exercício 12
    console.log('👉 Exercício 12: Inverta o valor de uma variável booleana.');

    let ligado = true;
    console.log('True ->', !ligado);
  }
}