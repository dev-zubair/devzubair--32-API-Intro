//json placeholder
//https://jsonplaceholder.typicode.com/

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(json => console.log(json))
}

//Load More User

function allPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}

// LOAD ALL USERS 
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
function displayUsers(data) {
    const ul = document.getElementById('user-name');
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

// LOAD USER EMAILS 
function loadEmails() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayEmail(data))
}

function displayEmail(data) {
    const ul = document.getElementById('user-email');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);
        console.log(user);
    }
}


//LOAD ADDRESSES

function loadPhone() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => loadUserphone(data))
}
function loadUserphone(data) {
    const ul = document.getElementById('user-phone');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.phone;
        ul.appendChild(li);
        console.log(user);
    }
}

function loadWebsite() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => userWebsite(data))
}

function userWebsite(data) {
    const ul = document.getElementById('user-website');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.website;
        ul.appendChild(li);
    }
}