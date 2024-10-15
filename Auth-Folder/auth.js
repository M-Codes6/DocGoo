
    // Get the user type from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const userType = urlParams.get('user');

    // Handle the "Create" button click
    document.getElementById('create-button').onclick = function () {
        if (userType === 'clinical') {
            window.location.href = '../user-auth/Clinical/clinical.html';
        } else if (userType === 'patient') {
            window.location.href = '../user-auth/Patient/patient.html';
        } else {
            // Fallback in case no user type is specified
            alert('Please select a user type to proceed.');
        }
    };

    // Handle the "Login" button click
    document.getElementById('login-button').onclick = function () {
        if (userType === 'clinical' || userType === 'patient') {
            window.location.href = '../user-auth/LoginBoth/login.html';
        } else {
            // Fallback in case no user type is specified
            alert('Please select a user type to proceed.');
        }
    };