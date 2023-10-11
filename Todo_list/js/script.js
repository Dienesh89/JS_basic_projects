// checking the todo in present in the localsStorage or not
if(localStorage.todo == undefined) {
   localStorage.setItem("todo","[]");// if todo is not present do this
}

// taking the todo and saving to the localStorage
let add = document.getElementById("add")// add button
add.addEventListener("click",(e)=>{
    e.preventDefault()// prevents page from refreshing
    let todo = addTodo.value // getting the todo
    if (todo == "") {
        todo = "None"
    }
    let todoArr = JSON.parse(localStorage.todo)// taking the string array of the todo which is present in localStorage and converting to the array
    todoArr.push(todo);// pushing the todo in to the array
    let todoArrStr = JSON.stringify(todoArr);// converting the array to string
    localStorage.setItem("todo",todoArrStr)// saving the converted string to localStorage
    console.log(localStorage.todo)// display the todos on console

    // Getting date for displaying in todo
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let dateArr = [date,month];
    let date_created = dateArr.join("/");
    
    // displaying the todo after taking the todo
    let div = document.createElement("div");// creating the div
    div.className = "info transition-todo" // setting the class of div to info
    div.innerHTML = `
       <p class="todo color" style="width:59.5%;">${todo}</p>
       <div class="xmark-cont">
       <div class="xmark color" id="${todo}" onclick="deletes(this.id)">
           <i class="fa-solid fa-xmark"></i>
       </div>
       </div>
   `
   document.querySelector("#todo-cont").append(div)// appending the div into the body   

})

// Delete function 
const deletes = (id)=>{
    document.getElementById(id).parentElement.parentElement.remove()// removing the todo element
    let todoStr = localStorage.todo;// taking the  string array of the todo which is present in the localStorage 
    let todoStrArr = JSON.parse(todoStr)// converting the string array to array
    let IndxOfTodo = todoStrArr.indexOf(id)
    todoStrArr.splice(IndxOfTodo,1)// removes the todo from array the todo
    let newArr = JSON.stringify(todoStrArr)
    localStorage.setItem("todo",newArr)// setting the new array to the localStorage
}

// display all todos when page loads
let lsStrArr = localStorage.todo;
let lsArr = JSON.parse(lsStrArr);
let loop = 0;
while ((lsArr.length)>loop) {
    let t = lsArr[loop]
    let div = document.createElement("div");
    div.className = "info" 
    div.innerHTML = `
       <p class="todo color" style="width:59.5%;">${t}</p>
       <div class="xmark-cont">
       <div class="xmark color" id="${t}" onclick="deletes(this.id)">
           <i class="fa-solid fa-xmark"></i>
       </div>
       </div>
   `
   document.querySelector("#todo-cont").append(div)
    loop++
}
