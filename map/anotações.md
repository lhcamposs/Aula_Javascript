# Map

### O que é?

- É quando um conjunto passa pra uma operação e se torna outro conjunto
- Cria um novo array
- Não modifica o array original
- Realiza as operações em ordem



## Sintaxe

- Callback: função a ser executada em cada elemento, e dentro a gente também tem acesso ao item, index e array que você vai modificar
- thisArg(opcional): valor de 'this' dentro da função callback



## Map vs forEach

- A diferença é o valor de retorno
- Considere se o array auxiliar será necessario



# Filter

- Cria um novo array
- não modifica o array original, ele vai retornar uma nova lista apenas com os items que passaram pelo filtro



### Sintaxe

- parecida com a do map
- callback: função a ser executada em cada elemento
- thisArg(opcional): valor de 'this' dentro da função callback

![image-20220504150825691](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220504150825691.png)



- O item sempre vai ser o primeiro argumento



# Reduce

- Executa uma função em todos os elementos do array, retornando um valor único



### Sintaxe

array.reduce(callbackFn, initialValue)

- Callback: função a ser executada a partir do acumulador.
- initialValue: valor sobre o qual o retorno final irá atuar

![image-20220504153007971](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220504153007971.png)

- Accumulator/ prevValue: acumulador de todas as chamadas de callbackFn
- currentValue: elemento atual sendo acessado pela função