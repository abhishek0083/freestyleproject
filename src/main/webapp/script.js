document.getElementById('change-color-btn').addEventListener('click', function() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
});

document.getElementById('change-text-btn').addEventListener('click', function() {
    const heading = document.querySelector('h1');
    heading.textContent = heading.textContent === 'Welcome to My Interactive Web Page' 
        ? 'Hello, JavaScript Enthusiast!' 
        : 'Welcome to My Interactive Web Page';
});
