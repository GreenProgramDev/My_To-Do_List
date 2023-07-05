// ---------Code Constants---------->>>>>>

//get content(value) from input
const inputNewContent = document.getElementById("inputNewContent");

//get button and add event click
const addNew = document.getElementById("addNew");

//get UL that receive new LI(listItem)
const toDoList = document.getElementById("toDoList");

const toDoListChecked = document.getElementById("toDoListChecked");

//  ----------structure of the Code--------->>>>>

addNew.addEventListener("click", () => {
  //receiving content of the value from #inputNewContent
  const listItem = inputNewContent.value.trim();
  //listItem now it has of the new value

  if (listItem !== "") {
    //create new element li inside UL#toDoList
    const newItem = document.createElement("li");
    newItem.classList.add("itemLi");
    newItem.textContent = listItem;

    //add content from listItem inside of the newItem

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("btnChecked");

    const separator = document.createElement("hr");
    separator.classList.add("separator");

    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.classList.add("btnRemove");
    remove.addEventListener("click", () => {
      newItem.remove();
      checkbox.remove();
      remove.remove();
      containerItem.remove();
    });

    const containerItem = document.createElement("div");
    containerItem.classList.add("containerItem");

    //add the newItem inside the toDoList element (ul)
    containerItem.appendChild(newItem);
    //add input checkbox inside of the toDoList (ul)
    containerItem.appendChild(checkbox);
    //add button delete inside of the newItem
    containerItem.appendChild(remove);
    //remove content from inside of the inputNewContent and leave empty
    toDoList.appendChild(containerItem);

    inputNewContent.value = "";
  }
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const li = checkbox.parentElement;
      if (checkbox.checked) {
        li.style.backgroundColor = "green";
        li.style.textDecoration = "line-through";
        toDoListChecked.appendChild(li);
      } else {
        li.style.backgroundColor = "#b0b0b0";
        li.style.textDecoration = "underline";
        toDoList.appendChild(li);
      }
    });
  });
});
