var listofactivities =[];

var input = document.getElementById("input");

var button=document.getElementById("button");

var todolist=document.getElementById("todolist")


button.onclick=tasks

function tasks(){
    listofactivities.push(input.value)
    input.value="";
    listdisplay();
}
 function listdisplay(){
    todolist.innerHTML=" ";
    listofactivities.forEach(function(n,i)
    {
        todolist.innerHTML += `<li> ${n} <a onclick='edit(${i})'>Edit</a> <a onclick='deleteitem(${i})'>&times &nbsp &nbsp| &nbsp&nbsp&nbsp </a></li>`;


    });
 }
 function deleteitem(i){
    listofactivities.splice(i,1)
    listdisplay()

 }
 function edit(i){
    var updatedtasks=prompt("Please edit the task");
    listofactivities.splice(i,1,updatedtasks)
    listdisplay()
 }
