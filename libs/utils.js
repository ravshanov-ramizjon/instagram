export function reload(arr, place, Component) {
place.innerHTML = ""
    for (let item of arr) {
        let elem = Component(item)
        

        place.append(elem)
    }
}
