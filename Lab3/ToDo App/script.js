const list = document.getElementById('todo_lists')
const button = document.getElementById('push')
const inputAdd = document.getElementById('input-todos')

function addToDo() {
    const text = inputAdd.value;
    if(text === "") {
        alert("Please Enter a text");
        return;
    }

    const li = document.createElement('li');
    li.classList.add('li-class');
 
    const checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';

    const added_text = document.createElement('p');
    added_text.classList.add('par');
    added_text.textContent = text;
    
    const del = document.createElement('span');
    del.setAttribute('id', 'del');
    del.innerHTML = `&#128465;`;
    
    li.appendChild(checkbox);
    li.appendChild(added_text);
    li.appendChild(del);
    list.append(li);

    inputAdd.value = ''; 
}

function deleteToDo(element) {
    element.parentElement.remove();
}

function line(element) {
    element.classList.add('lined');
}


list.addEventListener('click', function(element) {
    if(element.target.tagName === "SPAN") deleteToDo(element.target);
    if(element.target.tagName === "INPUT") {
        if(element.target.parentElement.classList.contains('lined')) {
            element.target.parentElement.classList.remove('lined');
        }
        else element.target.parentElement.classList.add('lined');
    }
});

button.addEventListener('click', addToDo);
inputAdd.addEventListener('keypress', function(element) {
    if(element.key === 'Enter') {
        addToDo();
    }
});