# Javascript Assincrono

## Assincronicidade

- Definição: "Que não ocorre ou não se efetiva ao mesmo tempo";
- O javascript roda de maneira síncrona.
- no assincrono a gento pode fazer alguma coisa enquanto faz outra também;



### Promises

- objeto de processamento assíncrono.

- Inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada.

  ![image-20220503172339846](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220503172339846.png)



- Uma promise pode ter 3 estados:
  1. **Pending**
  2. **Fulfilled**
  3. **Rejected**

![image-20220503173945591](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220503173945591.png)



### Estrutura

![image-20220503172918705](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220503172918705.png)



### Manipulação

![image-20220503173059416](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220503173059416.png)



## Async/await

- Funções assíncronas precisam dessas duas palavras chave.



![image-20220503173339871](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220503173339871.png)

- await vai fazer com que espere a promise resolver para continuar
- Funções assicncronas também retornam promises.
- utilizando try...catch:

![image-20220503173644560](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220503173644560.png)





# Consumindo APIs

## APIs

- Application Programming interface
- Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.
- Você consegue acessá-la por meio de URLs.
- JSON: JavaScript Object Notation
- É muito comum que APIs retornem seus dados no formato .json, portanto precisamos tratar esses dados quando os recebemos.



### Fetch

![image-20220503174852046](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220503174852046.png)

- Precisa utilizar o await quando for utilizar o fetch
- Operações no banco (POST, GET, PUT, DELETE, etc)

![image-20220503175040678](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220503175040678.png)

- fetch retorna uma promise