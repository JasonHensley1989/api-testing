// console.log("JS Active");

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//         const container = document.createElement('div');
//         const list = document.createElement('ul');

//         data.forEach(item => {
//             console.log(item.title);
//             const itemId = document.createElement('li');
//             const itemTitle = document.createElement('h4');
//             itemId.textContent = item.id;
//             itemTitle.textContent = item.title;
//             list.appendChild(itemId);
//             list.appendChild(itemTitle)
//         })
//         container.appendChild(list);
//         document.body.appendChild(container)
//     })


// NEWS API
const apiKey = 'c432f053df844de99a0e1a43560c6ef6';

fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
    .then(res => res.json())
    .then(data => console.log(data))
