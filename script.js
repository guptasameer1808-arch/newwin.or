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
