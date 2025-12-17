// Select elements
const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');
const strengthFill = document.getElementById('strengthFill');
const strengthText = document.getElementById('strengthText');

const reqLength = document.getElementById('req-length');
const reqNumber = document.getElementById('req-number');
const reqLower = document.getElementById('req-lower');
const reqUpper = document.getElementById('req-upper');
const reqSymbol = document.getElementById('req-symbol');

// Regex Patterns
const patterns = {
    length: /.{8,}/,
    number: /\d/,
    lower: /[a-z]/,
    upper: /[A-Z]/,
    symbol: /[!@#$%^&*(),.?":{}|<>]/
};

// Toggle Password Visibility
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePassword.classList.toggle('fa-eye-slash');
});

// Real-time Validation
passwordInput.addEventListener('keyup', () => {
    const value = passwordInput.value;
    let score = 0;

    // Check Length
    if (patterns.length.test(value)) {
        reqLength.classList.add('valid');
        reqLength.firstElementChild.className = "fas fa-check";
        score++;
    } else {
        reqLength.classList.remove('valid');
        reqLength.firstElementChild.className = "fas fa-circle";
    }

    // Check Number
    if (patterns.number.test(value)) {
        reqNumber.classList.add('valid');
        reqNumber.firstElementChild.className = "fas fa-check";
        score++;
    } else {
        reqNumber.classList.remove('valid');
        reqNumber.firstElementChild.className = "fas fa-circle";
    }

    // Check Lowercase
    if (patterns.lower.test(value)) {
        reqLower.classList.add('valid');
        reqLower.firstElementChild.className = "fas fa-check";
        score++;
    } else {
        reqLower.classList.remove('valid');
        reqLower.firstElementChild.className = "fas fa-circle";
    }

    // Check Uppercase
    if (patterns.upper.test(value)) {
        reqUpper.classList.add('valid');
        reqUpper.firstElementChild.className = "fas fa-check";
        score++;
    } else {
        reqUpper.classList.remove('valid');
        reqUpper.firstElementChild.className = "fas fa-circle";
    }

    // Check Symbol
    if (patterns.symbol.test(value)) {
        reqSymbol.classList.add('valid');
        reqSymbol.firstElementChild.className = "fas fa-check";
        score++;
    } else {
        reqSymbol.classList.remove('valid');
        reqSymbol.firstElementChild.className = "fas fa-circle";
    }

    // Update Progress Bar
    const percent = (score / 5) * 100;
    strengthFill.style.width = `${percent}%`;

    // Update Text & Color
    if (score <= 2) {
        strengthFill.style.backgroundColor = "#ff4d4d"; // Red
        strengthText.innerHTML = "Rating: <span style='color: #ff4d4d'>Weak</span>";
    } else if (score <= 4) {
        strengthFill.style.backgroundColor = "#ffc107"; // Yellow
        strengthText.innerHTML = "Rating: <span style='color: #ffc107'>Medium</span>";
    } else {
        strengthFill.style.backgroundColor = "#4cc9f0"; // Blue/Green
        strengthText.innerHTML = "Rating: <span style='color: #4cc9f0'>Strong</span>";
    }
});