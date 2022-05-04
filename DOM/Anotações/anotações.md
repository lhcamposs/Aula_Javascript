---
typora-copy-images-to: ./
---

# Dom

### O que é o DOM

- Document Object Model
- O DOM HTML é um padrão de como acessar e modificar os elementos HTML de uma página.

![image-20220504172326440](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220504172326440.png)



### DOM vs BOM

- BOM: Browser Object Model

![image-20220504172858984](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220504172858984.png)

- Tudo que esta dentro do objeto window, mas não fazem parte do DOM





## Métodos

### Manipulando o DOM

- Estrutura HTML 
  - tag
  - id
  - classe

![image-20220504173554307](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220504173554307.png)

![image-20220504173820066](C:\Users\lhcam\AppData\Roaming\Typora\typora-user-images\image-20220504173820066.png)

- document.createElement(element)
  - cria um novo elemento HTML
- document.removeChild(element)
  - remove um elemento
- document.appendChild(element)
  - adiciona um elemento
- document.replaceChild(new, old)
  - substitui um elemento

## Trabalhando com Estilos

- Element.classList

![image-20220504175352073](C:\workspace\DIO\modulo 3\Aula_Javascript\DOM\image-20220504175352073.png)



- Acessando diretamente o CSS de um elemento 
  - document.getElementsByTagName("p").style.color = "blue";
    - ​	cor da fonte de todos os paragrafos vai ficar azul

## Eventos

- São qualquer tipo de ação que o usuario faça numa pagina.

### Tipos

- eventos do mouse
  - mouseover, mouseout
- Eventos de clique
  - click, dbclick
- eventos de atualização
  - change, load

### Acionando eventos

#### Event listener

- Diretamente no javascrip, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação.

  ![image-20220504181445317](C:\workspace\DIO\modulo 3\Aula_Javascript\DOM\image-20220504181445317.png)

#### Atributo HTML

- especifica a função a ser chamada diretamente no HTML.

![image-20220504181610898](C:\workspace\DIO\modulo 3\Aula_Javascript\DOM\image-20220504181610898.png)