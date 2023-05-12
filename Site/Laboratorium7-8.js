function checkValue(input) {
    return input.value.trim() !== '';
  }
  
  function checkLength(input, minLength) {
    return input.value.trim().length >= minLength;
  }
  
  function checkEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input.value.trim());
  }
  
  function checkPasswordStrength(input) {
    const password = input.value.trim();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{}|\\:;"'<>,.?/~`]).{8,}$/;
    if (passwordRegex.test(password)) {
      return 'strong';
    } else if (password.length > 0) {
      return 'weak';
    } else {
      return 'empty';
    }
  }
  
  function validateForm() {
    var form = document.getElementById("myForm");
  
    // Walidacja pola "Imię"
    var firstNameInput = form.elements["firstName"];
    var firstNameError = firstNameInput.nextElementSibling;
    if (!isFilled(firstNameInput)) {
      firstNameError.textContent = "Pole jest wymagane";
    } else {
      firstNameError.textContent = "";
    }
  
    // Walidacja pola "Nazwisko"
    var lastNameInput = form.elements["lastName"];
    var lastNameError = lastNameInput.nextElementSibling;
    if (!isFilled(lastNameInput)) {
      lastNameError.textContent = "Pole jest wymagane";
    } else {
      lastNameError.textContent = "";
    }
  
    // Walidacja pola "Email"
    var emailInput = form.elements["email"];
    var emailError = emailInput.nextElementSibling;
    if (!isFilled(emailInput)) {
      emailError.textContent = "Pole jest wymagane";
    }

    function validatePasswordConfirmation() {
        const password = document.querySelector("[name='password']").value;
        const confirmPassword = document.querySelector("[name='confirmPassword']").value;
        if (password !== confirmPassword) {
          document.querySelector("[name='confirmPassword'] + span.error").textContent = "Hasła nie są takie same";
          document.querySelector("[name='confirmPassword']").setCustomValidity("Hasła nie są takie same");
        } else {
          document.querySelector("[name='confirmPassword'] + span.error").textContent = "";
          document.querySelector("[name='confirmPassword']").setCustomValidity("");
        }
      }
      
      const sameAddressCheckbox = document.querySelector('input[name="sameAddress"]');
      const correspondenceAddressLabel = document.querySelector('#correspondenceAddress');
      const provinceSelect = document.querySelector('#province');
      const addressTextarea = document.querySelector('textarea[name="address"]');
      const correspondenceAddressTextarea = document.querySelector('textarea[name="correspondenceAddress"]');
      
      function toggleColor