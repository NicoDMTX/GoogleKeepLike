const btncreate = document.querySelector('#valid');
const title = document.querySelector('#title');
const element = document.getElementById('element');
const content = document.querySelector('#content');


class Note {
    constructor(color, title, content) {
        this.color = color;
        this.title = title;
        this.content = content;
    }

    createNote(color = '', title = '', content = '') {
        const container = document.createElement("div");
        const noteTitle = document.createElement("h1");
        const c = document.createElement('div')

        container.style.backgroundColor = color
        noteTitle.innerText = title
        container.appendChild(noteTitle)
        c.innerText = content
        container.appendChild(c)

        return container;
    }

}

btncreate.addEventListener('click', () => {
    const colorPicker = document.querySelector('#colorpicker');
    const note = new Note();
    note.createNote(colorPicker.value, title.value, content.value)
    element.appendChild(note)
})



// const createNote = (color) => {
    
//     const noteContainer = document.querySelector('.note-container')
    

//     noteContainer.appendChild(newNote, color);
//     newNote.classList.add('element')
    
//     newNote.id = 'element'
//     return newNote.style.backgroundColor = color
// }

// const createTitle = () => {
//     const elements = document.querySelectorAll('#element')
    
//     let titleValue = title.value;

//     elements.forEach(element => {
//         element.appendChild(noteTitle);
//         noteTitle.classList.add('title-note')
//         return noteTitle.innerHTML = titleValue;
//     });
    
// }

// const noteContent = () => {
//     const elements = document.querySelectorAll('.element')
//     const contentParagraph = document.createElement("p");
//     const contentValue = document.createTextNode(content.value);

//     elements.forEach(element => {
//         element.appendChild(contentValue);
//         contentParagraph.classList.add('.note-content');
//         return contentParagraph.innerHTML = contentValue;
//     })
    
// }
