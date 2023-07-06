// ---------Code Constants---------->>>>>>

//get content(value) from input
const inputNewContent = document.getElementById("inputNewContent");

//get content(value) from date and time from the exectution
const formatTime = document.getElementById("timeTask");
let formatted
formatTime.addEventListener("change", () => {
  const formattedTime = formatsTime(formatTime.value);
  formattedDate = formattedTime;
});

const formatsTime = (datetime) => {
  const dateObj = new Date(datetime); 

  const dia = dateObj.getDate();
  const mes = dateObj.getMonth() + 1;

  const hora = dateObj.getHours();
  const minutos = dateObj.getMinutes();
  
  const dateFormated = `${dia
    .toString()
    .padStart(2, "0")}/${mes.toString().padStart(2, "0")}`;
  const hoursFormated = `${hora
    .toString()
    .padStart(2, "0")}:${minutos.toString().padStart(2, "0")}`;

  const timeFormated = `${dateFormated} - ${hoursFormated}`;

  return timeFormated;
};

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

  const timeValue = formatTime.value.trim();

  if (listItem !== "") {
    //create new element li inside UL#toDoList
    const newItem = document.createElement("li");
    newItem.classList.add("itemLi");
    newItem.textContent = listItem;
    newItem.setAttribute("for", "forChecked");

    const itemTime = document.createElement("li");
    itemTime.classList.add("inputTime");
    itemTime.textContent = formattedDate;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("btnChecked");
    checkbox.id = "forChecked";

    const remove = document.createElement("button");

    //icon trash of the input checked remove
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash-can");
    remove.appendChild(icon);

    // remove.textContent = "Remove";
    remove.classList.add("btnRemove");
    remove.addEventListener("click", () => {
      newItem.remove();
      checkbox.remove();
      remove.remove();
      containerItem.remove();
    });
    //container that wrap all elements for styled
    const containerItem = document.createElement("div");
    containerItem.classList.add("containerItem");

    //add the newItem inside the toDoList element (ul)
    containerItem.appendChild(newItem);

    containerItem.appendChild(itemTime);
    //add input checkbox inside of the toDoList (ul)
    containerItem.appendChild(checkbox);
    //add button delete inside of the newItem
    containerItem.appendChild(remove);

    toDoList.appendChild(containerItem);

    inputNewContent.value = "";
    timeTask.value = "";
  }
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const li = checkbox.parentElement;
      if (checkbox.checked) {
        li.style.backgroundColor = "greenyellow";
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
