class Item
{
    constructor(newTask)
    {
        this.createListItem(newTask);
    }

    createListItem(newTask)
    {
        let itemList = document.getElementById("list");
        let span = document.createElement("span");
        let input = document.createElement("input");
        let label = document.createElement("label");
        let li = document.createElement("li");

        span.textContent = newTask;
        input.setAttribute("type", "checkbox");
        label.classList.add("item");


        label.appendChild(input);
        label.appendChild(span);
        li.appendChild(label);

        itemList.appendChild(li);
    }
}

let buttons =
{
    add: document.getElementById("btn-add"),
}

const inputToDo = document.getElementById("input-to-do");

buttons.add.addEventListener("click", ()=>
{
    if(inputToDo.value.trim() === '')
    {
        console.log("Debe rellenar el campo");
        // aca va la animación de shake
    }    
    else
    {
        new Item(inputToDo.value);
    }

    inputToDo.value = "";
});
