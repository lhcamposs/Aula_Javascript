# Tratamento de Erros

## Tipos de erros

### ECMAScript Error

erros que ocorrem em tempo de execução

composto por:

- mensagem
- nome
- linha 
- call stack



### DOMException

Erros relacionados ao Document Object Model (DOM).



# Tratando os erros

## Throw

- usando throw no lugar de return ele vai retornar com um comportamento de erro ao invés do return que iria retornar uma string



### try...catch

- dentro do bloco try você vai verificar um pedaço de código, e se esse pedaço de código tiver algum tipo de erro ele vai ser tradado dentro do bloco catch, e você pode manipular dentro do catch esse erro da maneira que preferir
- da para usar throw no lugar de catch



### Finaly

- try...catch alem de poder contem o throw, ele também pode conte o bloco finaly
- uma instrução que vai ser chamada independente se tem um erro ou não 



## O objeto Error

- Geralmente é mais usado (message), mas as vezes pode conter outros tipo (flimeName, lineNumber) olhar no mozila ou no w3schools para ver a documentação
- Declarar o erro como uma constante e depois criar uma nova instancia e enviar o seus parâmetros, exemplo:

​		const MeuErro = new Error('Mensagem Inválida'); 

- O erro também pode ter um nome, se eu quiser nomear eu pego o erro declarado e coloco o nome dele, exemplo:

  MeuErro.name = 'InvalidMessage';

- MeuErro.stack  => vai dizer o que aconteceu, o que foi executado e onde esse erro foi encontrado