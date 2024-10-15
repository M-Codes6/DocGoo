// Import the Supabase client
import { supabase } from '../supabaseClient.js';

// Handle patient form submission
document.getElementById('patient-register-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  // Collect form data and trim whitespace
  const patientName = document.getElementById('patient-name').value.trim();
  const patientAddress = document.getElementById('patient-address').value.trim();
  const patientEmail = document.getElementById('patient-email').value.trim();
  const patientPhone = document.getElementById('patient-phone').value.trim();
  const patientPassword = document.getElementById('patient-password').value.trim();

  // Validate form fields
  if (!patientName || !patientEmail || !patientPassword || patientPassword.length < 6) {
    alert('Please provide valid patient information. Password should be at least 6 characters long.');
    return;
  }

  // Register patient with Supabase authentication (create a user)
  const { user, error } = await supabase.auth.signUp({
    email: patientEmail,
    password: patientPassword,
  });

  if (error) {
    alert('Error creating patient account: ' + error.message);
    return;
  }

  // Insert additional patient details into the 'patients' table
  const { data, error: patientError } = await supabase
    .from('patients')
    .insert([{ name: patientName, address: patientAddress, email: patientEmail, phone: patientPhone }]);

  if (patientError) {
    alert('Error saving patient details: ' + patientError.message);
    return;
  }

  alert('Patient account created successfully!');

  // Redirect to login page after successful registration
  window.location.href = '../LoginBoth/login.html';
});

// Password show/hide functionality
document.getElementById('showPassword').addEventListener('change', function () {
  const passwordField = document.getElementById('patient-password');
  passwordField.type = this.checked ? 'text' : 'password';
});
