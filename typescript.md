TypeScript é uma linguagem de programação, criada pela Microsoft, baseada no JavaScript.
É uma linguagem Open Source.

O resultado final de um código em TypeScript precisa ser convertido e traduzido em JS para que funcione.

O TypeScript ajuda a prever erros que possam acontecer no futuro, por ser um código mais simples.
É um código tipado.

tsc src/script.ts --outDir public  - Compilar o Código em TS para JS e criar na pasta public
tsc script.ts --noEmitOnError - Impede a compilação caso haja algum erro no código

Tipagens primitivas

Depois do nome da variável adicionar : e o tipo da variável

ex: 
let nome: string = 'Vitor';
let idade: number = 30;

Não há necessidade de atribuir tipagem a todo momento, apenas em situações mais delicadas em que o comportamento de um determinado elemento seja mais delicado de se lidar

Em arrays é possível tipar toda a variável ou os elementos do array individualmente

Para tipar um array:

tipo[]

ex: 
let nomes: string[] = ['Vitor', 'Pedro', 'Joao', 'Maria'];
