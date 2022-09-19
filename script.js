const btncreate = document.querySelector('#valid');
const title = document.querySelector('#title');
const element = document.querySelectorAll('#element')



btncreate.addEventListener('click', () => {
    createNote();
})

const createNote = () => {
    const newNote = document.createElement("div");
    const noteContainer = document.querySelector('.note-container')
    noteContainer.appendChild(newNote);
    newNote.classList.add('element')
    newNote.id = 'element'
    createTitle(newNote);
}

const createTitle = (newNote) => {
    const noteTitle = document.createElement("p");
    let titleValue = document.createTextNode(title.value)
    noteTitle.appendChild(titleValue)
    newNote.appendChild(titleValue)
}