var express = require('express')
const axios = require('axios')
const fetch = require('node-fetch')
var http = require("http"); 
var app = express();
const port = 8888

/*axios.get('https://rickandmortyapi.com/api/character/')
  .then(response => response.json())
  .then(characters => showCharacters(characters.results))

showCharacters = characters => {
  const charactersDiv = document.querySelector("#rick-and-morty-characters");
  characters.forEach(character => {
    const characterElement = document.createElement("p");
    characterElement.innerText = `Character Name: ${character.name}`;
    charactersDiv.append(characterElement);
  });
} */

let url = 'https://rickandmortyapi.com/api/character/';
let settings = { method: "Get" };

fetch(url, settings)
.then(response => response.json())
.then(characters => showCharacters(characters.results))

showCharacters = characters => {
  const charactersDiv = document.querySelector("#rick-and-morty-characters");
  characters.forEach(character => {
    const characterElement = document.createElement("p");
    characterElement.innerText = `Character Name: ${character.name}`;
    charactersDiv.append(characterElement);
  });
}

console.log('Listening on 8888');
app.listen(8888);



