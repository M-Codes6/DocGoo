// Import the Supabase client
import { supabase } from '../supabaseClient.js';

// Handle form submission
document.getElementById('clinic-register-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  // Collect form data and trim whitespace
  const clinicName = document.getElementById('clinic-name').value.trim();
  const clinicAddress = document.getElementById('clinic-address').value.trim();
  const clinicEmail = document.getElementById('clinic-email').value.trim();
  const clinicPhone = document.getElementById('clinic-phone').value.trim();
  const clinicPassword = document.getElementById('clinic-password').value.trim();

  // Validate form fields
  if (!clinicName || !clinicEmail || !clinicPassword || clinicPassword.length < 6) {
    alert('Please provide valid clinic information. Password should be at least 6 characters long.');
    return;
  }

  // Register clinic with Supabase authentication (create a user)
  const { user, error } = await supabase.auth.signUp({
    email: clinicEmail,
    password: clinicPassword,
  });

  if (error) {
    alert('Error creating clinic account: ' + error.message);
    return;
  }

  // Insert additional clinic details into the 'clinics' table
  const { data, error: clinicError } = await supabase
    .from('clinics')
    .insert([{ name: clinicName, address: clinicAddress, email: clinicEmail, phone: clinicPhone }]);

  if (clinicError) {
    alert('Error saving clinic details: ' + clinicError.message);
    return;
  }

  alert('Clinic account created successfully!');
  
  // Redirect to login page after successful registration
  window.location.href = '../LoginBoth/login.html';
});

// Password show/hide functionality
document.getElementById('showPassword').addEventListener('change', function () {
  const passwordField = document.getElementById('clinic-password');
  passwordField.type = this.checked ? 'text' : 'password';
});
