const todoList = document.querySelector(".todoList")

function clickAdd(){
    let newTodo = document.querySelector("#addTodo").value
    const todoCon = document.createElement("div")
    const delBtn = document.createElement("button")
    todoCon.classList.add("todo")
    todoCon.textContent = newTodo
    todoCon.addEventListener('click', () => {
        todoCon.classList.toggle("done")
    })
    delBtn.textContent = "Delete"
    delBtn.classList.add("delBtn")
    delBtn.addEventListener('click', () => {
        todoCon.remove()
    })
    todoCon.appendChild(delBtn)
    todoList.appendChild(todoCon)
}

