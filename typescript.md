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


Type Any

Utilizado quando você quer sobrescrever a tipagem do TS, permitando a inclusão de diferentes tipos dentro da variável. Ou seja, o TS irá ignorar a verificação de tipagem para essa variável em específico.

Para tipagem de função é possível definar a tipagem tanto dos parâmetros que a função recebe, assim como a função como um todo.

ex:

function firstLetterUpperCase(name: string): string {}

Sempre que uma função recebe propriedades de um objeto, é recomendado discernir os tipos no uso para evitar erros

Colocar uma interrogação (?) antes da definição de tipo da variável faz com que ela se torne opcional

Para multiplos tipos possíveis (ou um ou outro) em uma variável utilizar | para determiná-las

ex: 

let idade: string | number = 30

Quando utilizando tipos próprios se utiliza o padrão Pascal Case (primeira letra de cada palavra maiúsucla)

Tipos próprios são utilizados para simplifcar e organizar melhor o código (geralmente com objetos) e quando o tipo é replicável em outros locais do código

Diferença entre Type e Interface: o Type não é alterável uma vez criado (não é possível adicionar propriedades novas), já com o Interface é possível fazer alterações futuras