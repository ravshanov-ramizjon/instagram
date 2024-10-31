export function openDialog(item) {
    const modal = document.getElementById('storyDialog');
    const storyImage = document.getElementById('storyImage');
    const userName = document.getElementById('userName');
    const descriptionText = document.getElementById('descriptionText');

    userName.textContent = item.userName;
    descriptionText.textContent = item.description;
    storyImage.src = item.image;
   
}
