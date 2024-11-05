let userId = localStorage.getItem("userId")

fetch(`http://localhost:3001/users/${userId}`)
    .then((res) => res.json())
    .then((data) => profile(data))

function profile(user) {
    const profilePicture = document.querySelector('.profile-picture img');
    const username = document.querySelector('.profile-info .username');
    const postsCount = document.querySelector('.posts-count');
    const posts = document.querySelector('.posts');
    const followersCount = document.querySelector('.followers-count');
    const followers = document.querySelector('.followers');
    const followingCount = document.querySelector('.following-count');
    const following = document.querySelector('.following');
    const nameSurname = document.querySelector('.profile-info .name');
    const biography = document.querySelector('.profile-info .biography');
    const website = document.querySelector('.profile-info .website');


    profilePicture.src = user.userUrl

    username.innerHTML = user.Username;
    postsCount.innerHTML = user.Post;
    posts.innerHTML = "posts";
    followersCount.innerHTML = user.Followers;
    followers.innerHTML = "followers";
    followingCount.innerHTML = user.Following;
    following.innerHTML = "following";
    nameSurname.innerHTML = user.nameSurname
    biography.innerHTML = user.Biography
    website.innerHTML = user.Website
}