function mostrarTexto(texto: string, alinhamento: 'left' | 'right' | 'center' ) {
    return `<div style="textalign: ${alinhamento}"> ${texto} </div>`
}

mostrarTexto('Vitor', 'left');
mostrarTexto('Vitor', 'right');

type EhBoolean = true | false;

function temNome(nome: string): EhBoolean {
    if (nome !== '') {
        return true; 
    } else {
        return false;
    }
}

type Opcoes = {
    width: number,
    height: number
}

function configurar (props: Opcoes | 'auto') {

}

configurar({width: 100, height: 100})
configurar('auto');