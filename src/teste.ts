function multiplicacao(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}


const resultadoMultiplicacao = multiplicacao(5, 3);
const saudacaoUsuario = saudacao("João");

console.log(resultadoMultiplicacao);
console.log(saudacaoUsuario);
