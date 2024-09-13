
// LOGIN PROCESS

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Collect login data
    const emailOrPhone = document.getElementById('email').value.trim(); 
    const password = document.getElementById('password').value.trim();

    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the credentials match

    const user = users.find(user => 
        (user.email === emailOrPhone || user.number === emailOrPhone) && 
        user.password === password
    );

    if (user) {
        const userType = user.userType; // Retrieve user type

        // Store the user type in local storage (optional)
        localStorage.setItem('userType', userType);

        if (userType === 'clinical') {
            window.location.href = '../Clinical-Ui/clinic.html'; // Redirect to Clinical UI
        } else if (userType === 'patient') {
            window.location.href = '../Patient-Ui/patient.html'; // Redirect to Patient UI
        } else {
            alert('Invalid user type.');
        }
    } else {
        alert('Invalid email/phone number or password.');
    }
});

// Show or hide password

document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});
