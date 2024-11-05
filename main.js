import { Post } from "./components/Post.js";
import { Story } from "./components/Story.js";
import { reload } from "./libs/utils.js";





fetch('http://localhost:3001/stories')
.then(response => response.json())
.then(data => reload(data, document.querySelector('.story__list'), Story))

fetch('http://localhost:3001/posts')
.then(response => response.json())
.then(data => reload(data, document.querySelector('.post__list'), Post))

fetch('http://localhost:3001/users')
.then(response => response.json())
.then(data => search(data))

function search(users) {
    const searchInput = document.querySelector('.search');
    const closeModalBtn = document.getElementById('closeModal');
    const modal = document.getElementById('userModal');
    const userSearchInput = document.querySelector('#search');
    const userList = document.getElementById('userList');

    userList.innerHTML = '';

    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.classList.add('user-item');
        userItem.innerHTML = user.Nickname; 
        userList.append(userItem);
    });

    // Открытие модального окна при клике на инпут
    searchInput.onclick = () => {
        modal.style.display = 'block';
    };

    // Закрытие модального окна
    closeModalBtn.onclick = () => {
        modal.style.display = 'none';
    };

    // Закрытие модального окна при клике вне его
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Функция поиска пользователей
    userSearchInput.onkeyup = () => {
        const searchTerm = userSearchInput.value.toLowerCase();
        const userItems = document.querySelectorAll('.user-item');

        userItems.forEach(item => {
            const userName = item.textContent.toLowerCase();
            if (userName.includes(searchTerm)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    };
}