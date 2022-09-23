const noteContainer = document.querySelector('.note-container')

class Note {
    constructor() {
        
    }

    createNote(color = '#eeee', title = '', content = '',) {
        const container = document.createElement("div");
        const noteTitle = document.createElement("h1");
        const c = document.createElement('p')
        const updateBtn = document.createElement('button')
        const deleteBtn = document.createElement('button')
        const btncontainer = document.createElement("div");

        container.classList.add('element');
        container.style.backgroundColor = color
        noteTitle.innerText = title
        container.appendChild(noteTitle)
        c.innerText = content
        c.id = 'contentText'
        container.appendChild(c)
        container.appendChild(btncontainer);

        updateBtn.innerHTML = 'Update' 
        updateBtn.id = 'update'
        btncontainer.appendChild(updateBtn)
        deleteBtn.innerHTML = 'Delete' 
        deleteBtn.id = 'delete'
        btncontainer.appendChild(deleteBtn)

        return container;
    }

    updateContent() {
        const content = document.querySelector('#contentText')
        return content;
    }

    deleteNote(target) {
        const div = target
        div.remove();
        return div.classList.add('deleted-element')
         
    }

}

const btncreate = document.querySelector('#valid');
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const colorPicker = document.querySelector('#colorpicker');

btncreate.addEventListener('click', () => {
    
    const noteBuilder = new Note()
    const newNote = noteBuilder.createNote(colorPicker.value, title.value, content.value)

    if (!title.value) {
        return alert('Entrez un titre svp')
    } else {
        noteContainer.appendChild(newNote)
    }

    const btnUpdate = document.querySelector('#update')

    btnUpdate.addEventListener('click', () => {
        const noteBuilder = new Note()
        const noteUpdated = noteBuilder.updateContent()
        console.log(noteUpdated)
    })

    const btnDelete = document.querySelector('#delete')

    btnDelete.addEventListener('click', () => {
        const noteBuilder = new Note();
        const element = document.querySelector('.element')
        const noteDeleted = noteBuilder.deleteNote(element);
        return noteDeleted;
    })
    
})



