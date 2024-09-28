document.getElementById('sign-up-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.email === email)) {
        // alert('User already exists');
    } else {
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        // alert('Sign-up successful');
        window.open("/html/login.html")

}
});