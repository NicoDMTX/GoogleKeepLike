const btncreate = document.querySelector('#valid');
const title = document.querySelector('#title');
const elements = document.querySelectorAll('#element')
const content = document.querySelector('#content')
let elementsArray = [];

btncreate.addEventListener('click', () => {
    createNote();
    createTitle();
    noteContent();
    setNoteColor();
    console.log(elementsArray)
    
})

const createNote = () => {
    const newNote = document.createElement("div");
    const noteContainer = document.querySelector('.note-container')

    noteContainer.appendChild(newNote);
    newNote.classList.add('element')
    newNote.id = 'element'
    elementsArray.push(newNote)
}

const createTitle = () => {
    const noteTitle = document.createElement("h1");
    let titleValue = title.value;

    elements.forEach(element => {
        element.appendChild(noteTitle);
        noteTitle.classList.add('title-note')
        return noteTitle.innerHTML = titleValue;
    });
    
}

const noteContent = () => {
    const elements = document.querySelectorAll('.element')
    const contentParagraph = document.createElement("p");
    const contentValue = document.createTextNode(content.value);

    elements.forEach(element => {
        element.appendChild(contentValue);
        contentParagraph.classList.add('.note-content');
        return contentParagraph.innerHTML = contentValue;
    })
    
}

const setNoteColor = () => {
    const colorPicker = document.querySelector('#colorpicker')
    const elements = document.querySelectorAll('.element')

    elements.forEach(element => {
        return element.style.backgroundColor = colorPicker.value
    })
}
