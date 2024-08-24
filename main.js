// Check if the user is logged in
var username = localStorage.getItem('username');
if (username) {
    // Display the username instead of "Account"
    document.getElementById('accountLink').textContent = username;
} else {
    // If not logged in, display "Account" as usual
    document.getElementById('accountLink').textContent = 'Account';
}
