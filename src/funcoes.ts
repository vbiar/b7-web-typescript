// Parâmetros de Funções

function firstLetterUpperCase(name: string): string {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
};

let nome = firstLetterUpperCase('vitor'); 

function sum(n1: number, n2: number): number {
    return n1 + n2;
}
