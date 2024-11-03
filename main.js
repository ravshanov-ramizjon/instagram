import { openDialog } from "./components/Dialog.js";
import { Post } from "./components/Post.js";
import { Story } from "./components/Story.js";
import { reload } from "./libs/utils.js";



fetch('http://localhost:3001/stories')
.then(response => response.json())
.then(data => reload(data, document.querySelector('.modal'), openDialog))

fetch('http://localhost:3001/stories')
.then(response => response.json())
.then(data => reload(data, document.querySelector('.story__list'), Story))

fetch('http://localhost:3001/posts')
.then(response => response.json())
.then(data => reload(data, document.querySelector('.post__list'), Post))

