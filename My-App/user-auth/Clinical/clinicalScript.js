
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Collect form data and trim whitespace
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const password = document.getElementById('password').value.trim();

    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email or phone number already exists
    const userExists = users.some(user => user.email === email || user.number === number);

    if (userExists) {
        alert('Account already exists with this email or phone number.');
        return;
    }

    // Basic validation for password length
    if (password.length < 6) {
        alert('Password should be at least 6 characters long.');
        return;
    }

    // Generate OTP and prompt user to enter it
    const generatedOTP = generateOTP();
    const userOTP = prompt(`An OTP has been sent: ${generatedOTP}\nPlease enter the OTP to continue:`);

    // Check if the entered OTP matches the generated OTP
    if (userOTP !== generatedOTP) {
        alert('Invalid OTP. Please try again.');
        return;
    }
    
    // Generate OTP function
    function generateOTP(length = 6) {
        const digits = '0123456789';
        let otp = '';
        for (let i = 0; i < length; i++) {
            otp += digits[Math.floor(Math.random() * 10)];
        }
        return otp;
    }

    // Store new user data
    users.push({ name, address, email, number, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully!');
    window.location.href = '../Create-Login-folder/login.html'; 
});

// Password Show checkbox functionality
document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});



