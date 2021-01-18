import Request from './Request.js';
import UI from './UI.js';

const form = document.querySelector('form-questions');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printQuestions(data.results))
});

Request.getCategories()
    .then(response => response.json())
    .then(data => UI.printCategories(data.trivia_categories))
