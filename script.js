const input = document.querySelector('#input');
const shoppingList = document.querySelector('ul');


const clearInput = function() {
    input.value = "";
}

input.addEventListener('keydown', function(e) {
    if(e.keyCode === 13) {
       renderItem();
       clearInput();
    }
})


const renderItem = function() {
    const item = document.createElement('li');
    item.className = 'shoppingItem';
    item.innerHTML = `- ${input.value} <div><i class="fas fa-trash"></i><i class="fas fa-check"></i><i class="fas fa-pencil-alt"></i></div>`;
    const deleteIcon = item.querySelector('.fa-trash');
    deleteIcon.classList.add('grey');
    deleteIcon.addEventListener('click', function() {
        deleteIcon.parentElement.parentElement.remove();
    })
    const doneIcon = item.querySelector('.fa-check');
    doneIcon.classList.add('green');
    doneIcon.addEventListener('click', function(){
        doneIcon.classList.toggle('done');
        doneIcon.parentElement.parentElement.classList.toggle('checked');
    })
    const editIcon = item.querySelector('.fa-pencil-alt');
    editIcon.classList.add('yellow');
    editIcon.addEventListener('click', function(e) {
        const newInput = document.createElement('input');
        const hej = e.target.parentElement.parentElement;
        hej.appendChild(newInput);
        editIcon.parentElement.parentElement.childNodes[0].textContent = '';
        newInput.addEventListener('mouseleave', function() {
            const newNote = `- ${newInput.value}`;
            editIcon.parentElement.parentElement.childNodes[0].textContent = newNote;
            newInput.remove();
        })

        newInput.addEventListener('keydown', function(e) {
            if (e.keyCode === 13) {
                const newNote = `- ${newInput.value}`;
            editIcon.parentElement.parentElement.childNodes[0].textContent = newNote;
            newInput.remove();
            }
        })

    });
    item.addEventListener('mouseenter', function() {
        const icons = item.querySelector('div');
        icons.style.display = "block"
    })
    item.addEventListener('mouseleave', function() {
        const icons = item.querySelector('div');
        icons.style.display = "none"
    })
    shoppingList.appendChild(item);
}






