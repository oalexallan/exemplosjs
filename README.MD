# RPG0009 - Descobrindo o JavaScript

Este projeto é uma missão acadêmica com o objetivo de explorar diversas formas de utilização do JavaScript no lado do cliente.

## Objetivos da Prática

- Explorar a sintaxe do JavaScript na implementação de algoritmos;
- Manipular os elementos da página através do DOM;
- Utilizar o formato JSON para repositórios e transmissão de dados;
- Utilizar o framework Vue.js na construção dinâmica de elementos HTML.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- Bootstrap
- Vue.js
- Node.js
- Axios (Node.js)
- API de Receitas (para gerar os dados das receitas e as imagens delas, salvos em JSON para uso no `receitas.html`)

## Descrição do Projeto

### Parte 1: Ordenando.js

A primeira parte do projeto envolveu a criação de um arquivo `ordenando.js` com funções arrow. Em seguida, foi criado um arquivo HTML chamado `ordenando.html` que possui a estrutura de entrada de valor, botões para adicionar, misturar e ordenar usando as funções do `ordenando.js`. CSS foi usado para estilizar e deixar o mais próximo possível da imagem fornecida no documento.

### Parte 2: Receitas.html

A segunda parte do projeto envolveu a criação de um arquivo `receitas.html` usando o Bootstrap para criar os estilos. Foi solicitado um trecho em JS para coletar dados de um JSON e imagem PNG e com algumas funções. No entanto, o Vue.js foi usado para coletar os dados do arquivo `receitas.json`. Para criar esse arquivo, o Node.js e o Axios foram usados para buscar dados e imagens de uma API e montar esse JSON. Depois, o JSON foi organizado para ter apenas as receitas desejadas e as imagens em link.

### Parte 3: Usuarios.html

A terceira parte do projeto envolveu a criação de um arquivo HTML chamado `usuarios.html`. Os dados para montar este arquivo foram fornecidos e incluem o acesso ao endereço de teste REST `https://reqres.in/api/users?per_page=10` e a observação dos dados que são retornados no formato JSON. A página foi criada com várias características específicas, como a inclusão da folha de estilos do Bootstrap, a biblioteca JavaScript do Vue.js, a aplicação das classes `container` e `bg-warning` ao body, entre outras. O Vue.js foi usado principalmente nesta parte do projeto.

## Desafios

O projeto apresentou vários desafios, principalmente o uso do Vue.js, que foi uma nova tecnologia para mim. Apesar disso, consegui implementá-lo com sucesso tanto no `receitas.html` quanto, principalmente, no `usuarios.html`. Outro desafio foi criar funções de forma simples e bem estruturada no `ordenando.js`.

