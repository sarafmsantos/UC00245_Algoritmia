// PARÂMETRO OPCIONAL (?)
// O símbolo '?' torna o parâmetro 'idade' opcional
// Quando não fornecido, o parâmetro tem valor 'undefined'
export function criarUsuario(nome: string, idade?: number) {
  // Operador lógico OR (||) fornece valor padrão quando idade é undefined
  // Se idade for falsy (undefined, 0, '', etc), usa 0 como valor padrão
  return { nome, idade: idade || 0 };
}
 
 
// VALOR PADRÃO (=)
// Define um valor padrão para o parâmetro 'qtd' quando não fornecido
// Mais seguro que o operador || pois não sofre com valores falsy (0, '', etc)
export function calcularTotal(preco: number, qtd: number = 1): number {
  return preco * qtd;
}
 

// RETORNO MÚLTIPLO (TUPLA)
// A função retorna uma tupla: [number, number] - array com tipos específicos por posição
// Útil quando precisa retornar múltiplos valores relacionados
export const analisarTexto = (texto: string): [number, number] => {
  // split(' ') divide o texto em palavras usando espaço como separador
  // length conta quantas palavras existem
  const palavras = texto.split(' ').length;
 
  // length conta o total de caracteres (incluindo espaços)
  const caracteres = texto.length;
 
  // Retorna tupla com [número de palavras, número de caracteres]
  return [palavras, caracteres];

};