document.addEventListener("DOMContentLoaded", function() {

    // Dropdown functionality
    var dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Form validation
    var form = document.getElementById("enrollmentForm");

    form.addEventListener("submit", function(event) {
        // Get form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var course = document.getElementById("course").value;
        var notRobot = document.getElementById("notRobot").checked;

        // Email validation (basic pattern)
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            event.preventDefault(); // Stop form submission
            return;
        }

        // Phone number validation (basic)
        if (phone.length < 10) {
            alert("Please enter a valid phone number.");
            event.preventDefault(); // Stop form submission
            return;
        }

        // Check "I'm not a robot" checkbox
        if (!notRobot) {
            alert("Please confirm you are not a robot.");
            event.preventDefault(); // Stop form submission
            return;
        }

        // Success message
        alert("Registration successful! Please proceed to payment.");
    });
});