const alreadyLoggedIn = sessionStorage.getItem('loggedIn')
if(alreadyLoggedIn) {
    window.location.href = "/API.html";
}

const users =[
    {
        email: 'testxD@hotmail.com',
        password: 'test'
    }
];

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user  = users.find((user) => user.email === email && user.password === password);
    if(user) {
        sessionStorage.setItem('loggedIn', 'true') 
        window.location.replace("/API.html");
    } else {
        alert('Usuario y/o Contraseña incorrectos')
    }
}

