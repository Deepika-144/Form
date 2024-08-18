document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (validateForm()) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });

    // Validation function
    function validateForm() {
        let isValid = true;

        // Full Name validation
        const fullName = document.getElementById("fullName");
        if (fullName.value.trim().length < 5) {
            fullName.classList.add("is-invalid");
            isValid = false;
        } else {
            fullName.classList.remove("is-invalid");
            fullName.classList.add("is-valid");
        }

        // Email validation
        const email = document.getElementById("email");
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add("is-invalid");
            isValid = false;
        } else {
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
        }

        // Phone Number validation
        const phone = document.getElementById("phone");
        if (phone.value === "1234567890" || phone.value.length !== 10 || isNaN(phone.value)) {
            phone.classList.add("is-invalid");
            isValid = false;
        } else {
            phone.classList.remove("is-invalid");
            phone.classList.add("is-valid");
        }

        // Password validation
        const password = document.getElementById("password");
        const fullNameValue = fullName.value.trim().toLowerCase();
        if (password.value.length < 8 || password.value.toLowerCase() === "password" || password.value.toLowerCase() === fullNameValue) {
            password.classList.add("is-invalid");
            isValid = false;
        } else {
            password.classList.remove("is-invalid");
            password.classList.add("is-valid");
        }

        // Confirm Password validation
        const confirmPassword = document.getElementById("confirmPassword");
        if (confirmPassword.value !== password.value) {
            confirmPassword.classList.add("is-invalid");
            isValid = false;
        } else {
            confirmPassword.classList.remove("is-invalid");
            confirmPassword.classList.add("is-valid");
        }

        return isValid;
    }

    // Adding real-time validation
    form.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", function () {
            validateForm();
        });
    });
});
