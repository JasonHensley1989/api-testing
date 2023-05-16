console.log("JS Active");

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        const container = document.createElement('div');
        const list = document.createElement('ul');

        data.forEach(item => {
            console.log(item.title);
            const itemId = document.createElement('li');
            const itemTitle = document.createElement('h4');
            itemId.textContent = item.id;
            itemTitle.textContent = item.title;
            list.appendChild(itemId);
            list.appendChild(itemTitle)
        })
        container.appendChild(list);
        document.body.appendChild(container)
    })



