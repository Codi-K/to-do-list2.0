let addItem = document.querySelector(".abtn");
let sortItem = document.querySelector(".sbtn")
let itemInput = document.querySelector(".i-screen")
let output = document.querySelector(".lis")
let clientItems = []
let tempID =1;
let dotoDelete;
let checkBox;
let editbtn;

// Add Items
addItem.addEventListener("click", (event)=>{
    event.preventDefault();
    if(itemInput.value == ""){
        alert("input is empty!")
    }else{
        clientItems.push({
            id: tempID,
            name: itemInput.value,
            completed: false,
            date: new Date()
        
        })
        tempID++;
        clientItems.value = "";

        console.log(clientItems);
        renderList();
    }
})

// Sort Button
sortItem.addEventListener("click", (event)=>{
    event.preventDefault();
    clientItems = clientItems.sort((a,b) => {
        if (a.name < b.name){
            return -1;
        }else {
            return 1;
        
        }
        return 0;
    })
renderList()
})


// Delete button
function  deleteButtons(){
    dotoDelete = [...document.querySelectorAll(".close-btn")];

    dotoDelete.forEach((item) => {
        item.addEventListener('click', deleteItem)
        
    })
}
function deleteItem() {
    let startPoint = dotoDelete.indexOf(event.target);
            clientItems.splice(startPoint, 1);
            localStorage.setItem("itemlist", JSON.stringify(clientItems))
            renderList();
}

// Checkbox 
function checkBoxes(){
    checkBox = [...document.querySelectorAll('.checkme')];
    checkBox.forEach((item) => {
        item.addEventListener('click', checkBoxs)
    })
}
function checkBoxs() {
    let indexPosition = checkBox.indexOf(event.target);
            if(clientItems[indexPosition].completed === true) {
                clientItems[indexPosition].completed = false;
            }
            else {
                clientItems[indexPosition].completed = true
            }
            renderList();
}

// Edit button 
function editItem(){
    editbtn = [...document.querySelectorAll('.edit-btn')];
    editbtn.forEach((item)=>{
        item.addEventListener('click', editTodoItem)
    })
    }
    function editTodoItem(){
        let newItem = prompt('Enter new Item:');
        let index = editbtn.indexOf(event.target);
        clientItems[index].name = newItem;
        localStorage.setItem("itemlist", JSON.stringify(clientItems))
        renderList();
    }

// list from client
function renderList(){
    output.innerHTML = ""
    clientItems.forEach((items)=> {
        if(items.completed === true){
            output.innerHTML +=`
            <div id="input">
                <input type="checkbox" class="checkme" checked>
                <p id="ptag" class="jsptag">${items.name}</p>
                <div>
                <button class="edit-btn">edit</button>
                <button type="button" id="close-btn${items.id}" class="close-btn">&times</button>
                </div>
            </div>
                `
    }else {
        output.innerHTML +=`
            <div id="input">
                <input type="checkbox" class="checkme">
                <p id="ptag">${items.name}</p>
                <div>
                <button class="edit-btn">edit</button>
                <button type="button" id="close-btn${items.id}" class="close-btn">&times</button>
                </div>
            </div>
                `
            }
})
    deleteButtons();
    checkBoxes();
    editItem()
}
renderList()



























                                            // my work


// // adding a value to an array 
// addItem.addEventListener("click", (e)=>{
//     e.preventDefault()
    
//     if(itemInput.value){
//         clientItems.push(itemInput.value)
//       itemInput.value = ""
//     }else {
//       itemInput.style = "outline: 3px solid red"
//   }
  
//   //Update
//   localStorage.setItem("items",JSON.stringify (clientItems)) 
// })



// //shwoing the value in a list
// addItem.addEventListener("click", ()=>{
//     output.innerHTML = ""
//   clientItems = JSON.parse (localStorage.getItem("items"))
//   clientItems.forEach((items) =>{
//       output.innerHTML +=`
//       <li> <input id="box" type="checkbox"> ${items}  

//       <!-- Button trigger modal -->

//       <button type="button" class="btn btn-light" data-bs-toggle="modal"
//           data-bs-target="#staticBackdrop">
//           Edit
//       </button>

//       <!-- Modal -->

//       <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
//           tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//           <div class="modal-dialog">
//               <div class="modal-content">
//                   <div class="modal-header">
//                       <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Task</h1>
//                       <button type="button" class="btn-close" data-bs-dismiss="modal"
//                           aria-label="Close"></button>
//                   </div>
//                   <div class="modal-body">
                      
//                   </div>
//                   <div class="modal-footer">
//                       <button type="button" class="btn btn-secondary"
//                           data-bs-dismiss="modal">Close</button>
//                       <button type="button" class="btn btn-primary">Confirm Changes</button>
//                   </div>
//               </div>
//           </div>
//       </div> 
//       <button type="button" class="btn btn-light"> 
//           &times
//       </button>
//       </li>` 

//     })
// })

