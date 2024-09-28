document.getElementById('log-in-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // alert('Log-in successful');
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.open("/html/main.html", "_self");
    } else {
        // alert('Invalid email or password');
    }
});
