export function Story(item) {
    const story = document.createElement('div')
    const imageBox = document.createElement('div')
    const image = document.createElement('img')
    const p = document.createElement('p')
    
    image.setAttribute("src", item.avatarUrl)
    p.textContent = item.userName

    story.classList.add("story__item")
    imageBox.classList.add('image')
    image.classList.add('storisimg')
    story.append(imageBox, p)
    imageBox.append(image)
    
    return story
}
