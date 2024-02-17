document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameInput.classList.add('error');
            isValid = false;
        } else {
            nameInput.classList.remove('error');
        }

        if (!messageInput.value.includes('please')) {
            messageInput.classList.add('error');
            isValid = false;
        } else {
            messageInput.classList.remove('error');
        }

        if (!isValid) {
            const insults = [
                "Oops, looks like you forgot something...",
                "Did you mean to leave this blank?",
                "Please fill in the missing information.",
                "Try again! This time with feeling!",
                "I'm sorry, Dave. I'm afraid I can't do that. (Fill in the blanks!)",
                "Seriously? You call that a message?",
                "Error 404: Message not found. (Please try again!)",
                "Is this your first time filling out a form?",
                "Maybe try using words next time?",
                "Nice try, but you'll need to fill in the form properly.",
                "You're almost there! Just kidding, you're not even close.",
                "Do you need a tutorial on how to fill out forms?",
                "Your form-filling skills are as empty as this field.",
                "Are you a bot? Because your form-filling skills are robotic.",
                "Did you fall asleep while filling out this form?",
                "If this form were a movie, it would be a horror film.",
                "I've seen better form-filling from a toddler."
            ];
            const randomInsult = insults[Math.floor(Math.random() * insults.length)];
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Random color
            errorMessage.textContent = randomInsult;
            errorMessage.style.color = randomColor;
            errorMessage.style.display = 'block';
            errorMessage.style.animation = 'none'; // Remove previous animation
            void errorMessage.offsetWidth; // Trigger reflow to restart animation
            errorMessage.style.animation = 'spin 0.5s linear infinite'; // Add spinning effect
        }

        // If validation passes, submit the form
        // form.submit();
    });

    nameInput.addEventListener('input', function() {
        nameInput.classList.remove('error');
        errorMessage.style.display = 'none';
    });

    messageInput.addEventListener('input', function() {
        messageInput.classList.remove('error');
        errorMessage.style.display = 'none';
    });

    document.addEventListener('click', function() {
        errorMessage.style.animation = ''; // Remove animation
        void errorMessage.offsetWidth; // Trigger reflow to restart animation
        errorMessage.style.animation = 'spin 0.5s linear infinite'; // Add spinning effect
    });
});
