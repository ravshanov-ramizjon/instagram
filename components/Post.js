export function Post(item) {
    let post = document.createElement('div')
    const postHeader = document.createElement('div');
    const userAvatar = document.createElement('img');
    const username = document.createElement('span');
    const postImage = document.createElement('img');
    const postActions = document.createElement('div');
    const actionsLeft = document.createElement('div');
    const likeIcon = document.createElement('i');
    const commentIcon = document.createElement('i');
    const shareIcon = document.createElement('i');
    const saveIcon = document.createElement('i');
    const postDescription = document.createElement('p'); 
    const coment = document.createElement('p'); 





    post.classList.add("post__item")
    postHeader.classList.add('post-header');
    userAvatar.classList.add('user-avatar');
    username.classList.add('username');
    postImage.classList.add('post-image');
    postActions.classList.add('post-actions');
    actionsLeft.classList.add('actions-left');
    likeIcon.classList.add('fa', 'fa-heart-o');
    commentIcon.classList.add('fa', 'fa-comment-o');
    shareIcon.classList.add('fa', 'fa-paper-plane-o');
    saveIcon.classList.add('fa', 'fa-bookmark-o');
    postDescription.classList.add('post-description'); // Класс для описания
coment.classList.add('coment')

    userAvatar.src = item.avatarUrl;
    userAvatar.alt = 'User Avatar';
    userAvatar.style.width = '40px';
    userAvatar.style.height = '40px';
    userAvatar.style.borderRadius = '50%';

    username.textContent = item.userName;
    postImage.src = item.image;
    postImage.alt = 'Post Image';
    likeIcon.innerHTML = `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3 2.05C20.15 2.05 22.5 4.65 22.5 7.8C22.5 11.2 19.55 13.3 16.75 15.8C13.95 18.3 12.5 19.65 12 19.95C11.45 19.6 9.65 17.95 7.25 15.8C4.4 13.3 1.5 11.2 1.5 7.8C1.5 4.65 3.85 2.05 6.7 2.05C8.8 2.05 9.95 3.05 10.75 4.2C11.7 5.5 11.85 6.15 12 6.15C12.15 6.15 12.3 5.5 13.25 4.2C14.05 3.05 15.2 2.05 17.3 2.05ZM17.3 0.550003C15.05 0.550003 13.35 1.45 12 3.35C10.65 1.5 8.95 0.600003 6.7 0.600003C3 0.550003 0 3.8 0 7.8C0 11.45 2.7 13.8 5.3 16.05C5.6 16.3 5.95 16.6 6.25 16.9L7.4 17.9C9.6 19.85 10.7 20.85 11.2 21.15C11.45 21.3 11.75 21.4 12 21.4C12.3 21.4 12.55 21.3 12.8 21.15C13.3 20.85 14.2 20.05 16.7 17.75L17.7 16.85C18.05 16.55 18.35 16.25 18.7 16C21.35 13.8 24 11.5 24 7.8C24 3.8 21 0.550003 17.3 0.550003Z" fill="#262626"/>
</svg>

 ${item.likes}`;
    commentIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.75 23.05L22.35 17.55C23.25 15.9 23.75 14 23.75 12C23.75 5.5 18.5 0.25 12 0.25C5.5 0.25 0.25 5.5 0.25 12C0.25 18.5 5.5 23.75 12 23.75C14 23.75 15.9 23.25 17.55 22.35L23.05 23.75C23.45 23.85 23.85 23.45 23.75 23.05ZM22.25 12C22.25 14 21.75 15.5 20.95 17C20.85 17.2 20.8 17.45 20.85 17.7L21.9 21.9L17.75 20.85C17.5 20.8 17.25 20.8 17.05 20.95C16.15 21.45 14.45 22.25 12.05 22.25C6.35 22.25 1.75 17.65 1.75 12C1.75 6.35 6.35 1.75 12 1.75C17.65 1.75 22.25 6.35 22.25 12Z" fill="#262626"/>
</svg>
 ${item.comments}`; // Путь к изображению для комментариев

    shareIcon.innerHTML = `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.9 0.9C23.75 0.65 23.5 0.5 23.25 0.5H0.75C0.45 0.55 0.15 0.75 0.05 1C-0.05 1.25 0 1.6 0.2 1.85L8.15 9.65L10.9 20.95C10.95 21.25 11.2 21.45 11.5 21.5H11.6C11.85 21.5 12.1 21.35 12.25 21.15L23.85 1.65C24.05 1.45 24.05 1.15 23.9 0.9ZM2.6 2.05H20.35L9 8.35L2.6 2.05ZM11.95 18.85L9.75 9.65L21.2 3.3L11.95 18.85Z" fill="#262626"/>
</svg>

`
    saveIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2_476)">
<path d="M21.75 24C21.55 24 21.35 23.9 21.2 23.8L12 14.5L2.8 23.8C2.6 24 2.25 24.1 2 23.95C1.7 23.85 1.5 23.55 1.5 23.25V0.75C1.5 0.35 1.85 0 2.25 0H21.75C22.15 0 22.5 0.35 22.5 0.75V23.25C22.5 23.55 22.3 23.85 22.05 23.95C21.95 24 21.85 24 21.75 24ZM12 13C12.4 13 12.8 13.15 13.1 13.45L21 21.45V1.5H3V21.45L10.9 13.45C11.2 13.15 11.6 13 12 13Z" fill="#262626"/>
</g>
<defs>
<clipPath id="clip0_2_476">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

`
    // Добавляем описание поста
    postDescription.textContent = item.description;
coment.innerHTML='Смотреть все комментарии'


    postHeader.append(userAvatar, username);
    actionsLeft.append(likeIcon, commentIcon, shareIcon);
    postActions.append(actionsLeft, saveIcon);
    post.append(postHeader, postImage, postActions, postDescription, coment);


    return post
}
