// Import the Supabase client
import { supabase } from '../supabaseClient.js';

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect login data
    const emailOrPhone = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    // Handle login with Supabase authentication
    const { error } = await supabase.auth.signIn({
        email: emailOrPhone,
        password: password,
    });

    if (error) {
        alert('Invalid email/phone number or password.');
        return;
    }

    // Check user type: Clinic or Patient
    const { data: clinicData, error: clinicError } = await supabase
        .from('clinics')
        .select('*')
        .or(`email.eq.${emailOrPhone},number.eq.${emailOrPhone}`)
        .single();

    if (clinicError || !clinicData) {
        const { data: patientData, error: patientError } = await supabase
            .from('patients')
            .select('*')
            .or(`email.eq.${emailOrPhone},number.eq.${emailOrPhone}`)
            .single();

        if (patientError || !patientData) {
            alert('Invalid email/phone number or password.');
            return;
        }

        // Successful patient login
        alert('Patient login successful!');
        window.location.href = '/My-App/Patient-Ui/patient.html'; // Redirect to patient dashboard
    } else {
        // Successful clinic login
        alert('Clinic login successful!');
        window.location.href = '/My-App/Clinical-Ui/clinic.html'; // Redirect to clinic dashboard
    }
});

// Password visibility toggle functionality
document.getElementById('showPassword').addEventListener('change', function () {
    const passwordField = document.getElementById('login-password');
    passwordField.type = this.checked ? 'text' : 'password';
});
