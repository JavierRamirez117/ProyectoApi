const alreadyLoggedIn = sessionStorage.getItem('loggedIn')
if(!alreadyLoggedIn) {
    window.location.href = "/login.html";
}