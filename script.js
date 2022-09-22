const noteContainer = document.querySelector('.note-container')

class Note {
    constructor(color, title, content) {
        this.color = color;
        this.title = title;
        this.content = content;
    }

    createNote(color = '#eeee', title = '', content = '',) {
        const container = document.createElement("div");
        const noteTitle = document.createElement("h1");
        const c = document.createElement('div')

        container.classList.add('element');
        container.style.backgroundColor = color
        noteTitle.innerText = title
        container.appendChild(noteTitle)
        c.innerText = content
        container.appendChild(c)

        return container;
    }

}

const btncreate = document.querySelector('#valid');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const colorPicker = document.querySelector('#colorpicker');

btncreate.addEventListener('click', () => {
    
    const noteBuilder = new Note(colorPicker.value, title.value, content.value)
    const newNote = noteBuilder.createNote(colorPicker.value, title.value, content.value)
    noteContainer.appendChild(newNote)
})