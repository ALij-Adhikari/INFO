document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    const password = document.getElementById('password').value;
    if (password === 'enter the world') {
        window.location.href = 'welcome.html'; // Redirect to the welcome page
    } else {
        alert('Fuck You Bro');
    }
});
