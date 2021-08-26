function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))
}
loadComments()

// function displayComment(data) {
//     const divContainer = document.getElementById('comment');
//     console.log(data);
//     for (const user of data) {
//         const div = document.createElement('div');
//         div.innerText = `Title: ${user.name}`;
//         divContainer.appendChild(div);
//     }
// }


function displayComment(data) {
    const divContainer = document.getElementById('comment');
    console.log(data);
    for (const user of data) {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <h3>Title : ${user.name}</h3>
        <h5>Email : ${user.email}</h5>
        <p> Description : ${user.body}</p>
        `;
        divContainer.appendChild(div);
    }

}