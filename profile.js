let userId = localStorage.getItem("userId")
console.log(userId);

fetch(`http://localhost:3001/users/${userId}`)
    .then((res) => res.json())
    .then((data) => profile(data))

function profile(user) {
    const profilePicture = document.querySelector('.profile-picture img');
    const username = document.querySelector('.profile-info .username');
    const postsCount = document.querySelector('.posts-count');
    const followersCount = document.querySelector('.followers-count');
    const followingCount = document.querySelector('.following-count');
    const nameSurname = document.querySelector('.profile-info .name');


    profilePicture.src = user.userUrl

    username.innerHTML = user.Username;
    postsCount.innerHTML = user.Post + "posts";
    followersCount.innerHTML = user.Followers + "followers";
    followingCount.innerHTML = user.Following + "following";
    nameSurname.innerHTML = user.nameSurname
}