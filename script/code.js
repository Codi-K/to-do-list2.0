let addItem = document.querySelector(".abtn");
let sortItem = document.querySelector(".sbtn")
let itemInput = document.querySelector(".i-screen")
let output = document.querySelector(".li")
let clientItems = []
let checkBox = document.querySelector(".box")


// adding a value to an array 
addItem.addEventListener("click", (e)=>{
    e.preventDefault()
    
    if(itemInput.value){
        clientItems.push(itemInput.value)
      itemInput.value = ""
    }else {
      itemInput.style = "outline: 3px solid red"
  }
  
  //Update
  localStorage.setItem("items",JSON.stringify (clientItems)) 
})



//shwoing the value in a list
addItem.addEventListener("click", ()=>{
    output.innerHTML = ""
  clientItems = JSON.parse (localStorage.getItem("items"))
  clientItems.forEach((items) =>{
      output.innerHTML +=`
      <li> <input id="box" type="checkbox"> ${items}  

      <!-- Button trigger modal -->

      <button type="button" class="btn btn-light" data-bs-toggle="modal"
          data-bs-target="#staticBackdrop">
          Edit
      </button>

      <!-- Modal -->

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
          tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Task</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal"
                          aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary"
                          data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Confirm Changes</button>
                  </div>
              </div>
          </div>
      </div> 
      <button type="button" class="btn btn-light"> 
          &times
      </button>
      </li>` 

    })
})

