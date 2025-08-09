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
        let btnEdit = document.createElement("button");
        let btnDelete = document.createElement("button");

        input.setAttribute("type", "checkbox");
        
        span.textContent = newTask;
        btnEdit.textContent = "✏️";
        btnDelete.textContent = "❌";

        btnEdit.classList.add("btn-icon");
        btnDelete.classList.add("btn-icon");
        label.classList.add("item");

        label.appendChild(input);
        label.appendChild(span);
        li.appendChild(label);
        li.appendChild(btnEdit);
        li.appendChild(btnDelete);
        itemList.appendChild(li);

        btnEdit.addEventListener("click", ()=>
        {
            // continuar aca
        })
        

        btnDelete.addEventListener("click", () =>        // evento que elimina el item si se aprieta el boton
        {
            li.remove();
        });
    }
}

let buttons =
{
    add: document.getElementById("btn-add"),
    clear: document.getElementById("btn-clear-all"),
    removeChecked: document.getElementById("btn-remove-checked"),
}

const inputToDo = document.getElementById("input-to-do");

buttons.add.addEventListener("click", ()=>
{
    if(inputToDo.value.trim() === '')
    {
        applyAnimation(inputToDo, "shake");
    }    
    else
    {
        new Item(inputToDo.value);
    }

    inputToDo.value = "";
});


/**
 * Applies a CSS animation by restarting it to ensure proper playback.
 * @param {HTMLElement} element - The element to apply the animation to.
 * @param {string} animationClass - The name of the animation class.
 */
function applyAnimation(element, animationClass)
{
    element.classList.remove(animationClass);
    void element.offsetWidth; // Forces reflow to restart the animation
    element.classList.add(animationClass);
}