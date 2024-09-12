document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close-btn');

    // Expanded content for each box
    const content = {
        'about-me': 'My name is Alij Adhikari, and I am 21 years old. I am a full stack developer with expertise in both front-end and back-end technologies. My skills include HTML, CSS, JavaScript, and various frameworks. I am also a graphic designer, creating visual content for websites and marketing materials. Additionally, I have experience as a video editor, producing engaging video content. As an intermediate ethical hacker, I focus on identifying security vulnerabilities. In my free time, I enjoy boxing and practicing calisthenics.',
        'skills': 'I possess a diverse skill set that includes proficiency in web development technologies such as HTML, CSS, and JavaScript. I am experienced in using frameworks like React and Angular for front-end development. On the back-end, I work with Node.js and databases like MongoDB and MySQL. I have a strong foundation in graphic design, utilizing tools like Adobe Photoshop and Illustrator. My video editing skills include using software like Adobe Premiere Pro and Final Cut Pro. I am also knowledgeable in cybersecurity principles and ethical hacking techniques.',
        'experience': 'I have worked on several web development projects, ranging from personal websites to complex web applications. My experience includes designing and developing responsive websites, optimizing performance, and ensuring cross-browser compatibility. I have collaborated with teams to create custom web solutions tailored to client needs. Additionally, I have experience in graphic design for various marketing campaigns, including social media graphics and print materials. My video editing work includes producing promotional videos and editing video content for online platforms.',
        'quotes': '“The only way to do great work is to love what you do.” – Steve Jobs. “Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.” – Albert Schweitzer. “Opportunities don\'t happen. You create them.” – Chris Grosser. “The future belongs to those who believe in the beauty of their dreams.” – Eleanor Roosevelt. “Don\'t watch the clock; do what it does. Keep going.” – Sam Levenson. “It does not matter how slowly you go, as long as you do not stop.” – Confucius. “Believe you can and you\'re halfway there.” – Theodore Roosevelt.',
        'alij-hits': 'Alij Hits showcases some of the notable achievements and milestones in my career. From successful projects in web development to recognition in graphic design competitions, this section highlights the key accomplishments. My hits include creating a popular web application that gained significant user traction, winning awards for design work, and contributing to open-source projects. Each hit reflects my dedication to excellence and continuous learning. This section serves as a testament to my commitment to making a positive impact in the tech and creative fields.'
    };

    // Function to show the modal with the appropriate content
    const showModal = (boxId) => {
        modalText.innerHTML = content[boxId]; // Use innerHTML to render HTML content
        modal.style.display = 'flex'; // Show the modal
    };

    // Add click event listeners to all boxes
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            showModal(box.id);
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
