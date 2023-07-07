// !! Reorganiza as declarações pra ficar tudo junto
const addButton   = document.getElementById("Add");

const inputTask   = document.getElementById("Description");
const inputDate   = document.getElementById("Date");

const listPending = document.getElementById("ListPending");
const listChecked = document.getElementById("ListComplete");

let itemId = 0;

inputDate.value = new Date().getUTCDate();

function addNewItem() {
  const listItem = document.createElement("li");
  listItem.class = "item";
  listItem.id = `item-${itemId}`;
  
  listItem.innerHTML(```
    <div class="listDescription">
      <p class="title">${inputTask.value}</p>
      <p class="localtime">${inputDate.value}</p>
    </div>

    <div class="listActions">
      <input 
        id="checkbox-${itemId}" 
        type="checkbox" 
        class="checkbox" 
        onclick="checkItem(${itemId})">

      <button 
        onclick="deleteItem(${itemId})" 
        class="delete fa-solid fa-trash-can">
    </div>
  ```);

  listPending.appendChild(listItem);
  itemId += 1;
}

function removeItem(id) {
  document.removeChild(`item-${id}`);
}

function checkItem(id) {
  const li = document.getElementById(`item-${id}`);
  const checked = document.getElementById(`checkbox-${id}`).checked;

  document.removeChild(li);

  if (checked) {
    li.style.backgroundColor = "greenyellow";
    li.style.textDecoration = "line-through";
    listPending.appendChild(li);
  } else {
    li.style.backgroundColor = "#b0b0b0";
    li.style.textDecoration = "underline";
    listChecked.appendChild(li);
  }
}