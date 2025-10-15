document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Simulate form submission success (in a real website, this is where you'd use fetch() to send data to a server)
        
        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;

        // Simple validation check
        if (nameInput === "" || emailInput === "") {
            showMessage("Please fill in all required fields.", 'error');
            return;
        }

        // Display success message
        showMessage(`Thank you, ${nameInput}! Your inquiry has been sent. We will contact you at ${emailInput} shortly.`, 'success');

        // Clear the form fields after a successful simulated submission
        contactForm.reset();
    });

    /**
     * Shows a message below the contact form.
     * @param {string} messageText - The message to display.
     * @param {string} type - 'success' or 'error' for styling.
     */
    function showMessage(messageText, type) {
        formMessage.textContent = messageText;
        formMessage.classList.remove('hidden', 'success', 'error');
        formMessage.classList.add(type);
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Existing Contact Form Logic (I'm assuming this remains)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');
    // ... (Your existing code for contact form)

    // NEW Login Modal Logic
    const modal = document.getElementById("loginModal");
    const loginBtn = document.getElementById("loginBtn");
    const closeBtn = document.getElementsByClassName("close-btn")[0];
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const mobileForm = document.getElementById("mobileForm");
    const otpForm = document.getElementById("otpForm");
    const sendOtpBtn = document.getElementById("sendOtpBtn");
    const mobileNoInput = document.getElementById("mobileNo");
    const mobileDisplay = document.getElementById("mobileDisplay");
    const modalMessage = document.getElementById("modal-message");

    // 1. Open Modal
    loginBtn.onclick = function() {
        modal.style.display = "block";
        // Reset to Step 1 every time
        step1.classList.remove('hidden');
        step2.classList.add('hidden');
        modalMessage.classList.add('hidden');
        mobileForm.reset();
        otpForm.reset();
    }

    // 2. Close Modal (using X button)
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // 3. Close Modal (clicking anywhere outside the modal)
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // 4. Handle "Send OTP" button click
    sendOtpBtn.onclick = function() {
        const mobileNumber = mobileNoInput.value;
        if (mobileNumber.length === 10 && /^[0-9]+$/.test(mobileNumber)) {
            // --- UI Transition: Simulate OTP sent ---
            mobileDisplay.textContent = mobileNumber;
            step1.classList.add('hidden');
            step2.classList.remove('hidden');
            
            // In a real app, you would send the number to the server here.
            showModalMessage("OTP sent successfully! Check your phone.", 'success');
        } else {
            showModalMessage("Please enter a valid 10-digit mobile number.", 'error');
        }
    }

    // 5. Handle "Verify & Login" button click
    otpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const otpCode = document.getElementById("otpCode").value;

        // --- Simulated OTP verification ---
        if (otpCode === "123456") { // Example OTP for demonstration
            showModalMessage("Login Successful! Redirecting...", 'success');
            
            // In a real app, you would set a session cookie here.
            setTimeout(() => {
                modal.style.display = "none"; // Close modal
                // window.location.reload(); // Uncomment to refresh page after login
            }, 1500);
            
        } else {
            showModalMessage("Invalid OTP. Please try again.", 'error');
        }
    });

    // 6. Resend OTP link (simply shows a message for UI simulation)
    document.getElementById("resendOtp").onclick = function(event) {
        event.preventDefault();
        showModalMessage("OTP resent! Please check again.", 'success');
    }

    /**
     * Shows a message inside the modal.
     */
    function showModalMessage(messageText, type) {
        modalMessage.textContent = messageText;
        modalMessage.classList.remove('hidden', 'success', 'error');
        modalMessage.classList.add(type);
        
        // Hide message after 5 seconds
        setTimeout(() => {
            modalMessage.classList.add('hidden');
        }, 5000);
    }
    
    // ... (Your existing showMessage function for contact form can remain)

});
