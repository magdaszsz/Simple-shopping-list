const input = document.querySelector('#input');
const shoppingList = document.querySelector('ul');


const clearInput = function() {
    input.value = "";
}

input.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
       renderItem();
       clearInput();
    }
    
})

const renderItem = function() {
    const item = document.createElement('li');
    item.className = 'shoppingItem';
    item.innerHTML = `- ${input.value} <div><i class="fas fa-trash"></i><i class="fas fa-check"></i></div>`;
    const deleteIcon = item.querySelector('.fa-trash');
    deleteIcon.addEventListener('click', function() {
        deleteIcon.parentElement.parentElement.remove();
    })
    const doneIcon = item.querySelector('.fa-check');
    doneIcon.addEventListener('click', function(){
        doneIcon.classList.toggle('done');
        doneIcon.parentElement.parentElement.classList.toggle('checked');
    })
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






