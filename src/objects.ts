// Tipagem em OBJETOS

function resumo(usuario: {nome: string, idade?: number}) {
    if(usuario.idade !== undefined) {
        return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
    } else {
        return `Olá ${usuario.nome}, tudo bem?`
    }
};


let u = {
    nome: 'Vitor',
    idade: 30
};

resumo(u);