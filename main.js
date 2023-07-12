const inputNewContent = document.getElementById("inputNewContent");

const formatTime = document.getElementById("timeTask");
let formatted;
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

  const dateFormated = `${dia.toString().padStart(2, "0")}/${mes
    .toString()
    .padStart(2, "0")}`;
  const hoursFormated = `${hora.toString().padStart(2, "0")}:${minutos
    .toString()
    .padStart(2, "0")}`;

  const timeFormated = `${dateFormated} - ${hoursFormated}`;

  return timeFormated;
};

const addNew = document.getElementById("addNew");
const toDoList = document.getElementById("toDoList");
const toDoListChecked = document.getElementById("toDoListChecked");

addNew.addEventListener("click", () => {
  const listItem = inputNewContent.value.trim();

  if (listItem !== "") {
    const newItem = document.createElement("li");
    newItem.classList.add("itemLi");
    newItem.textContent = listItem;

    const itemTime = document.createElement("li");
    itemTime.classList.add("inputTime");
    itemTime.textContent = formattedDate;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("btnChecked");

    const remove = document.createElement("button");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-trash-can");
    remove.appendChild(icon);
    remove.classList.add("btnRemove");
    remove.addEventListener("click", () => {
      newItem.remove();
      checkbox.remove();
      remove.remove();
      containerItem.remove();
    });

    const containerItem = document.createElement("div");
    containerItem.classList.add("itemContainer");

    containerItem.appendChild(newItem);
    containerItem.appendChild(checkbox);
    containerItem.appendChild(itemTime);
    containerItem.appendChild(remove);

    toDoList.appendChild(containerItem);
    inputNewContent.value = "";
    timeTask.value = "";
  }

  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const li = checkbox.closest(".itemContainer");
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
