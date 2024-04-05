
const usernameValue = document.getElementById('username');
const titleValue = document.getElementById('title');
const contentValue = document.getElementById('content');
const submitButton = document.getElementById('submit');
const msgDiv = document.getElementById('msg');

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}
if (submitButton) {
    submitButton.addEventListener('click', function() {
        event.preventDefault();

        const username = usernameValue.value;
        const title = titleValue.value;
        const content = contentValue.value;

        if (username === ''|| title === '' || content === ''){
            displayMessage('error', 'Please complete the entire form');
        } else{
            let posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.push({ username, title, content });
            localStorage.setItem('posts', JSON.stringify(posts));
            window.location.href = './blog.html';
        }
    });
}
