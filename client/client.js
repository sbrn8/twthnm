const form = document.querySelector('form');
const API_URL = (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    const post = {
        name,
        content
    };
    
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'content-type': 'application/json'
        }
    });
});