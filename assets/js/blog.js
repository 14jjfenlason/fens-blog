const back = document.querySelector('#back');
const blogPost = document.getElementById('blogPost');

back.addEventListener('click', function() {
    window.location.href = './index.html'
})

const posts = JSON.parse(localStorage.getItem('posts')) || [];


posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');


    const usernameDetail = document.createElement('p');
    usernameDetail.textContent = `Post by: ${post.username}`;
    usernameDetail.classList.add('usernameEdit');

    const titleDetail = document.createElement('h3');
    titleDetail.textContent = post.title;

    const contentDetail = document.createElement('p');
    contentDetail.textContent = post.content;

    postDiv.appendChild(titleDetail);
    postDiv.appendChild(contentDetail);
    postDiv.appendChild(usernameDetail);
    blogPost.appendChild(postDiv);
});
