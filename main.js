// ---------Code Constants---------->>>>>>

//get content(value) from input
const inputNewContent = document.getElementById('inputNewContent');

//get button and add event click 
const addNew = document.getElementById('addNew');

//get UL that receive new LI(listItem)
const toDoList = document.getElementById('toDoList');


//  ----------structure of the Code--------->>>>>

addNew.addEventListener('click', () => {
    //receiving contente of the value from #inputNewContent
    const listItem = inputNewContent.value.trim();
    //listItem now it has of the new value
    const separetor = document.createElement('hr')
    separetor.style.width = '2rem';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('btnChecked');
    
    const remove = document.createElement('button');
    
    
    if(listItem !== ''){
        
        //creat new element li inside UL#toDoList 
        const newItem = document.createElement('li');
        //add content from listItem inside of the newItem 
        
        
        newItem.textContent = listItem;
        remove.textContent = 'Delete'
        remove.addEventListener('click', () => {
            
            newItem.remove();
            
        });
        //add the newItem inside the toDoList element
        toDoList.appendChild(newItem);
        //add input checkbox inside of the newItem
        newItem.appendChild(checkbox);
        //add button delete inside of the newItem
        newItem.appendChild(remove);
        //remove contente from inside of the inputNewContent and leave empty
        inputNewContent.value = "";
        
        
    }


        
        const checkboxes = document.querySelectorAll('li input[type="checkbox"]')
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                const li = checkbox.parentElement;
                if (checkbox.checked){
                    li.style.backgroundColor = 'green';
                } else{
                    li.style.backgroundColor = 'red';
                }
            });
            
        })    
});


