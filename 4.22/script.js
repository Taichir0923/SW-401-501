// Async , Promise etc...

// 1, 2, 3, 4, 5, 6;
/**
 * function1
 * function2
 * function3 - callback
 * function4
 * function5
 * function6 - function3
 * 
 */
// setTimeout(() => {
//     console.log('first');
// }, 2000);

// console.log('second');
// console.log('third');
// console.log('fourth');


// fetch('./data/users.json')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(el => {
//             console.log(el.name)
//         })
//     });

// const getData = () => {
//     return new Promise((resolve, reject) => {

//         resolve('Amjilttai bolloo...');

//         reject('tani huselt amjiltgui bolloo...');

//     })
// };

// getData()
//     .then(response => console.log(response));

const usersContainer = document.querySelector('.users');


const getUsers = uri => {
    return new Promise((resolve, reject) => {
        const data = fetch(uri);
        data.then(res => res.json())
            .then(datas => resolve(datas));
    })
};

getUsers('https://jsonplaceholder.typicode.com/users')
    .then(users => {
        users.forEach((el, index) => {
            const userData = document.createElement('div');
            userData.className = `user__single user-${el.id}`;
            userData.innerHTML = `<p id="user-${el.id}">${el.name}</p>`;
            usersContainer.appendChild(userData);

            userData.insertAdjacentHTML('beforeend', `
                <p id="todo">Todo</p>
                <p id="albums">Albums</p>
                <p id="photos">Photos</p>
                <p id="post">Posts</p>
                <p id="comment">Comments</p>
            `);

            userData.children[0].addEventListener('click', () => {
                console.log(el)
            })

        });

        return getUsers('./data/todos.json');
    })
    .then(todos => {
        // const todo = todos.filter(el => el.userId === 1);
        // console.log(todo);
        document.addEventListener('click', e => {
            if(e.target.id === 'todo'){
                const userId = e.target.parentNode.classList[1].split('-')[1];
                
                const todo = todos.filter(el => el.userId === +userId);
                console.log(todo);
            }
        });

        return getUsers('./data/posts.json')
    })
    .then(posts => {
        document.addEventListener('click', e => {
            if(e.target.id === 'post'){
                const userId = e.target.parentNode.classList[1].split('-')[1];
                
                const post = posts.filter(el => el.userId === +userId);
                console.log(post);
            }
        });
    })
    .catch(err => console.log(err));