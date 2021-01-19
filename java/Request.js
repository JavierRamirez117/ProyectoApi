export default class Request {
    static getCategories() {
        return fetch('https://opentdb.com/api_category.php')
    }
    static getQuestions() {
        const [amount, category] = this.getFilters();
        return fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}`)
    }
    
    static getdifficulty() {
        const [amount,difficulty ] = this.getFilters();
        return fetch(`https://opentdb.com/api.php?${amount}&difficulty=${difficulty}`)
    }
    
    static getFilters() {
        const totalQuestions = document.getElementById('total-questions').value;
        const category = document.getElementById('categories').value;
        const difficulty = document.getElementById('difficultys').value;
        return [totalQuestions, category,difficulty];
    }
}