type Idade = string | number;

let idade: Idade = 90;

function mostrarIdade(i: Idade): Idade {
    return i;
};

// Com Objetos
/* 
type User = {
    nome: string,
    idade: number
} */

interface User {
    nome: string;
}

interface User {
    idade: number
}


function resumo(usuario: User) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`
}

resumo({
    nome: 'Vitor',
    idade: 30
});