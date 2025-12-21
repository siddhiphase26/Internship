function validateForm() {

    var fname = document.getElementById("fname").value.trim();
    var lname = document.getElementById("lname").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var userType = document.getElementById("userType").value;

    // Clear errors
    document.getElementById("fnameError").innerHTML = "";
    document.getElementById("lnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmPasswordError").innerHTML = "";
    document.getElementById("userTypeError").innerHTML = "";
    document.getElementById("successMsg").innerHTML = "";

    var isValid = true;

    if (fname === "") {
        document.getElementById("fnameError").innerHTML = "First name is required";
        isValid = false;
    }

    if (lname === "") {
        document.getElementById("lnameError").innerHTML = "Last name is required";
        isValid = false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
    } 
    else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email format";
        isValid = false;
    }

    var phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        document.getElementById("phoneError").innerHTML = "Phone number is required";
        isValid = false;
    } 
    else if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Phone must be exactly 10 digits";
        isValid = false;
    }

    // Password validation
    var passwordPattern = /^(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/;

    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Password is required";
        isValid = false;
    } 
    else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerHTML =
            "Password must be at least 8 characters, include 1 capital letter and 1 special symbol";
        isValid = false;
    }

    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerHTML = "Confirm your password";
        isValid = false;
    } 
    else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        isValid = false;
    }

    if (userType === "") {
        document.getElementById("userTypeError").innerHTML = "Please select user type";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMsg").innerHTML =
            "Registration Successful! 🎉";
    }

    return false;
}

// Show / Hide password
function togglePassword(id) {
    var input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

// Password Strength Meter
function checkStrength() {
    var password = document.getElementById("password").value;
    var strengthMsg = document.getElementById("strengthMsg");

    if (password.length === 0) {
        strengthMsg.innerHTML = "";
        return;
    }

    var strong = /^(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*\d).{8,}$/;
    var medium = /^(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/;

    if (strong.test(password)) {
        strengthMsg.style.color = "green";
        strengthMsg.innerHTML = "Strong Password";
    }
    else if (medium.test(password)) {
        strengthMsg.style.color = "orange";
        strengthMsg.innerHTML = "Medium Password";
    }
    else {
        strengthMsg.style.color = "red";
        strengthMsg.innerHTML = "Weak Password";
    }
}
