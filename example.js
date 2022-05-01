var list=document.getElementById('to-do-list')
var btnAdd=document.getElementById("add-item")
var inputBox=document.getElementById('todo-input')
var btnUpdate = document.getElementById('update-item')
var btnRemove = document.getElementById('remove-item')
//var deleteBtn= document.getElementById('icon')
var listItem = document.getElementById('listItem')
var currentInputValue=' '

function createNewNode(){
var newListElement= document.createElement("li");
var textNode=document.createTextNode(currentInputValue);
newListElement.appendChild(textNode);
var deleteIcon = document.createElement('button')
deleteIcon.setAttribute('id','icon1')
deleteIcon.setAttribute('onclick','removeList()')
deleteIcon.innerHTML='<i class="fas fa-trash"></i>'
newListElement.appendChild(deleteIcon);
return newListElement;
}

function addListItem(){
if(currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== ''){
var newListElement=createNewNode();
list.appendChild(newListElement);
inputBox.value='';
currentInputValue='';
}
else{
alert("please enter a valid todo item")}
}

inputBox.addEventListener('input',function(e){
currentInputValue=e.target.value;

});

btnAdd.addEventListener("click",addListItem)
btnUpdate.addEventListener('click',function(){
var firstElement = list.firstElementChild;
var newListElement=createNewNode();
list.replaceChild(newListElement,firstElement)
})

btnRemove.addEventListener('click',function(){
var firstElement=list.firstElementChild;
list.removeChild(firstElement)
})

inputBox.addEventListener('keyup',function(e){
if(e.keyCode===13){
addListItem();
}
})
//var btnName=document.querySelectorAll('icon1')
//console.log(btnName)
//btnName.addEventListener('click',function(){
//alert('hello')
//})
function removeList(){
event.currentTarget.parentElement.remove();
}
