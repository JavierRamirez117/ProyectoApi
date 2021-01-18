export default class Request {
    static getCategories() {
        return fetch('https://opentdb.com/api_category.php')
    }
    static getQuestions() {
        const [amount, category] = this.getFilters();
        return fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}`)
    }
    static getFilters() {
        const totalQuestions = document.getElementById('total-questions').value;
        const category = document.getElementById('categories').value;
        const dificulty = document.getElementById('Dificulty').value;
        const kindofquestions = document.getElementById('Kindofquestions').value;
        return [totalQuestions, category,dificulty,kindofquestions];
    }
}