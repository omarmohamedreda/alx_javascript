document.addEventListener('DOMContentLoaded', function(){
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password'); 
    const error =  document.getElementById('error');

    passwordForm.addEventListener('submit', function (e){
    
    e.preventDefault();
    const password = passwordInput.value;

        if (validatePassword(password)) {
            
            error.textContent = ''; 
            passwordForm.submit();
        } else {
           
            error.textContent =
                'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.';
        }
})

function validatePassword(password){
    
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;

    
    return (
        lengthRegex.test(password) &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialCharRegex.test(password)
    );
}
})
