# 🛡️ Password Strength Checker

![Status](https://img.shields.io/badge/Status-Completed-success)
![Tech](https://img.shields.io/badge/Tech-HTML%20|%20CSS%20|%20JS-blue)

## 📌 Project Overview
As a Computer Science student, I wanted to understand how websites validate user data securely on the client side. This is a **Front-End Mini Project** that analyzes the strength of a password in real-time using **Regular Expressions (Regex)**.

Instead of just saying "Weak" or "Strong," it gives visual feedback on what is missing (like numbers or symbols) and animates a strength bar.

🔗 **[Live Demo Link Here](https://taneesha-516.github.io/Password-Strength-Checker/)**

## 🎯 Objectives
*   To practice **JavaScript Event Listeners** (`keyup`, `click`).
*   To learn how **Regular Expressions** are used in cybersecurity for pattern matching.
*   To implement a **Dark Mode UI** using modern CSS variables.

## 🛠️ Tech Stack
*   **HTML5:** For the structure.
*   **CSS3:** Flexbox for layout and animations for the progress bar.
*   **JavaScript (Vanilla):** For the logic and DOM manipulation.
*   **Tools:** VS Code, Git/GitHub.

## ⚙️ How It Works (The Logic)
The core logic happens in `script.js`. The code listens for every keystroke and checks the input against 5 Regex patterns:

1.  **Length:** `/.{8,}/` (Must be 8+ chars)
2.  **Numbers:** `/\d/` (Must contain a digit)
3.  **Lowercase:** `/[a-z]/` (Must contain a-z)
4.  **Uppercase:** `/[A-Z]/` (Must contain A-Z)
5.  **Special Chars:** `/[!@#$%^&*]/` (Must contain a symbol)

The progress bar width is calculated dynamically based on how many of these conditions are met:
`Width % = (Conditions Met / 5) * 100`

## 🚀 How to Run Locally
Since this is a static site, you don't need to install node_modules or Python!

1.  **Clone this repo:**
    ```bash
    git clone https://github.com/your-username/password-strength-checker.git
    ```
2.  **Open the folder:**
    ```bash
    cd password-strength-checker
    ```
3.  **Run it:**
    *   Simply double-click `index.html`.
    *   OR use the "Live Server" extension in VS Code.

## 🔮 Future Scope
Things I plan to add to make this project better:
*   [ ] Add a "Generate Strong Password" button.
*   [ ] Add a "Show Password" toggle (Done ✅).
*   [ ] Check for common passwords (like "123456") using a blacklist array.
