export function Story(item) {
    const story = document.createElement('div')
    const imageBox = document.createElement('div')
    const image = document.createElement('img')
    const p = document.createElement('p')
    const modal = document.querySelector(".modal");
    const storis = document.querySelector(".story-image")
    const description = document.querySelector(".story-description")

    image.setAttribute("src", item.avatarUrl)
    p.textContent = item.userName
    description.innerHTML = item.description

    story.classList.add("story__item")
    imageBox.classList.add('image')
    image.classList.add('storisimg')
    story.append(imageBox, p)
    imageBox.append(image)
   
    storis.src = item.image
 
    image.onclick = () => {
        modal.style.display = "block"
    }
    
    let countdown = 15;

    const interval = setInterval(() => {
        countdown--

        if (countdown = 0) {
            clearInterval();
            modal.style.display = "none";

        }
    }, 1000);

    modal.onclick = () => {
        if (modal) {
            clearInterval(interval);
            modal.style.display = "none";
        }
    };
    return story
}

