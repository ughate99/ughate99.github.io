document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready');

    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for reaching out!');
            form.reset();
        });
    }
});
