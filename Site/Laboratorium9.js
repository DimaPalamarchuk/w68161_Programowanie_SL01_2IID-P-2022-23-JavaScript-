function changeColor(button) {
 var buttons = document.getElementsByClassName("button");
 for (var i = 0; i < buttons.length; i++) {
  if (buttons[i] == button) {
   if (button.style.backgroundColor == "gray") {
    button.style.backgroundColor = "#3e8e41";
   } else {
    button.style.backgroundColor = "gray";
   }
  } else {
   buttons[i].style.backgroundColor = "gray";
  }
 }
}
    class Car {
      constructor(marka, model, rokProdukcji, kolor, predkosc) {
        this.marka = marka;
        this.model = model;
        this.rokProdukcji = rokProdukcji;
        this.kolor = kolor;
        this.predkosc = predkosc;
      }

      zwiekszPredkosc(wartosc) {
        this.predkosc += wartosc;
      }

      zmniejszPredkosc(wartosc) {
        this.predkosc -= wartosc;
      }

informacjeOSamochodzie() {
    return `Marka ${this.marka} ${this.model} (${this.rokProdukcji}), Kolor: ${this.kolor}, Prędkość: ${this.predkosc}`;
    }
}

const samochod = new Car("Fiat", "Punto", 2020, "Czarny", 0);

samochod.zwiekszPredkosc(50);
console.log(samochod.informacjeOSamochodzie()); // Marka Fiat Punto (2020), Kolor: Czarny, Prędkość: 50

samochod.zmniejszPredkosc(20);
console.log(samochod.informacjeOSamochodzie()); // Marka Fiat Punto (2020), Kolor: Czarny, Prędkość: 30

const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        buttons.forEach(btn => {
          btn.classList.remove("active");
        });
        button.classList.add("active");
      });
    });

    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", event => {
      event.preventDefault();
      validateForm();
    });

    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    function validateForm() {
      resetErrors();

      const firstNameValue = firstNameInput.value.trim();
      const lastNameValue = lastNameInput.value.trim();
      const emailValue = emailInput.value.trim();
      const passwordValue = passwordInput.value;
      const confirmPasswordValue = confirmPasswordInput.value;

      if (firstNameValue === "") {
        showError(firstNameInput, firstNameError, "Pole wymagane");
      }

      if (lastNameValue === "") {
        showError(lastNameInput, lastNameError, "Pole wymagane");
      }

      if (emailValue === "") {
        showError(emailInput, emailError, "Pole wymagane");
      } else if (!isValidEmail(emailValue)) {
        showError(emailInput, emailError, "Nieprawidłowy adres email");
      }

      if (passwordValue === "") {
        showError(passwordInput, passwordError, "Pole wymagane");
      }

      if (confirmPasswordValue === "") {
        showError(confirmPasswordInput, confirmPasswordError, "Pole wymagane");
      } else if (passwordValue !== confirmPasswordValue) {
        showError(confirmPasswordInput, confirmPasswordError, "Hasła nie pasują do siebie");
      }
    }

    function showError(input, errorElement, message) {
      input.classList.add("error");
      errorElement.textContent = message;
    }

    function resetErrors() {
      const errorElements = document.querySelectorAll(".error");
      errorElements.forEach(element => {
        element.textContent = "";
        element.classList.remove("error");
      });
    }

    function isValidEmail(email) {
      // Prosta walidacja adresu email (sprawdzamy obecność @)
      return email.includes("@");
    }

    function dodajDoTabeli() {
      const imieInput = document.getElementById("imie");
      const nazwiskoInput = document.getElementById("nazwisko");

      const imie = imieInput.value.trim();
      const nazwisko = nazwiskoInput.value.trim();

      if (imie !== "" && nazwisko !== "") {
        const tabela = document.getElementById("tabela");
        const nowyWiersz = tabela.insertRow();

        const imieKomorka = nowyWiersz.insertCell();
        imieKomorka.textContent = imie;

        const nazwiskoKomorka = nowyWiersz.insertCell();
        nazwiskoKomorka.textContent = nazwisko;

        imieInput.value = "";
        nazwiskoInput.value = "";
      }
    }