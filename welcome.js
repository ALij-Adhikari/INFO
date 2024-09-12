document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typing-text1');
    const buttonsContainer = document.getElementById('buttons-container');
    const continueBtn = document.getElementById('continue-btn');
    const quitBtn = document.getElementById('quit-btn');
    const text = 'Hey Welcome to Alij world, where coding meets talents';

    function typeText(element, text, delay) {
        element.textContent = '';
        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100); // Adjust typing speed here (slower)
            } else {
                // Show the buttons after a shorter delay
                setTimeout(() => {
                    buttonsContainer.classList.add('show');
                }, 500); // Reduced to 500 milliseconds before showing buttons
            }
        }

        type();
    }

    typeText(textElement, text, 0);

    // Event listeners for buttons
    continueBtn.addEventListener('click', () => {
        window.location.href = 'welcome2.html'; // Redirect to another welcome screen
    });

    quitBtn.addEventListener('click', () => {
        window.location.href = 'index.html'; // Redirect to home page
    });
});
