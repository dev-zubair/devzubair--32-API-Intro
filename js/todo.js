function toDoList() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayComment(data))
}
toDoList()

function displayComment(data) {
    const divContainer = document.getElementById('toDoList');
    console.log(data);
    for (const user of data) {
        const div = document.createElement('div');
        div.innerText = `Title: ${user.title}`;
        divContainer.appendChild(div);
    }
}