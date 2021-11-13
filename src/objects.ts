// Tipagem em OBJETOS

function resumo(usuario: {nome: string, idade: number}) {
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
};


let u = {
    nome: 'Vitor',
    idade: 30
};

resumo(u);