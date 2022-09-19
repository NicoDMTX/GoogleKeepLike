const btncreate = document.querySelector('#valid');
const title = document.querySelector('#title');
const element = document.querySelectorAll('#element')
const content = document.querySelector('#content')


btncreate.addEventListener('click', () => {
    createNote();
    createTitle();
})

const createNote = () => {
    const newNote = document.createElement("div");
    const noteContainer = document.querySelector('.note-container')
    noteContainer.appendChild(newNote);
    newNote.classList.add('element')
    newNote.id = 'element'
}

const createTitle = () => {
    const elements = document.querySelectorAll('.element')
    const noteTitle = document.createElement("h1");
    let titleValue = title.value;
    elements.forEach(element => {
        element.appendChild(noteTitle);
        noteTitle.classList.add('title-note')
        return noteTitle.innerHTML = titleValue;
    });
    
}

const noteContent = (note) => {
    const contentParagraph = document.createElement("p");
    contentParagraph.classList.add('.note-content');
    let contentValue = document.createTextNode(content.value);
    contentParagraph.appendChild(contentValue);
    note.appendChild(contentValue)
}