export function calcularArea(largura: number, altura: number): number {
  return largura * altura;
}
 
export function somarNumeros(numeros: number[]): number {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) soma += numeros[i];
  return soma;
}
 
export const verificarParidade = (numero: number): string => {
  return numero % 2 === 0 ? 'Par' : 'Ímpar';
};
 
export const exibirMensagem = (mensagem: string): void => {
  console.log('Mensagem:', mensagem);
};