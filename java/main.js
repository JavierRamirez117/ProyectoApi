import Request from './Request.js';
import UI from './UI.js';

const form = document.querySelector('#form-questions');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printQuestions(data.results))

});

Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printCategories(data.trivia_categories))

const div = document.querySelector('#difficultys');

div.addEventListener('submit',(event) => {
    event.preventDefault();
    Request.getdifficulty()
    .then(response => response.json())
    .then(data => UI.printdificulty(data.results))
})

Request.getdifficulty()
    .then(response => response.json())
    .then(data => UI.printdifficulty(data.results[0].difficulty))

