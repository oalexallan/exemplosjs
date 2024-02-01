// Importando o módulo 'fs' para manipulação de arquivos
const fs = require('fs');

// Importando o módulo 'axios' para fazer requisições HTTP
const axios = require('axios');

// Definindo a URL base da API
const functions = require('@google-cloud/functions-framework');

// Registre uma função HTTP com o Functions Framework que será executada
// quando você fizer uma solicitação HTTP para o endpoint da função implantada.
functions.http('helloGET', (req, res) => {
    res.send('Olá, Mundo!');
});
const apiURL = 'https://gold-anemone-wig.cyclic.app/receitas/todas';

// Fazendo uma requisição GET para a API
axios.get(apiURL)
    .then(response => {
        // Pegando as primeiras 3 receitas
        const receitas = response.data.slice(0, 12);

        // Convertendo o objeto JavaScript para uma string JSON
        const jsonContent = JSON.stringify(receitas, null, 2);

        // Escrevendo o conteúdo no arquivo 'receitas.json'
        fs.writeFile('receitas.json', jsonContent, 'utf8', function(err) {
            if (err) {
                console.log("Ocorreu um erro ao escrever no arquivo JSON");
            } else {
                console.log("JSON salvo com sucesso!");
            }
        });
    })
    .catch(error => {
        console.log("Ocorreu um erro ao buscar as receitas: ", error);
    });
