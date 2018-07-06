
var x = document.getElementById("aa");
x.addEventListener("click", mySecondFunction);
function mySecondFunction() {
   
    var value=document.getElementById('hey').value;
    if(value){addItemTodo(value)}
}
function addItemTodo(text){
     // var node = document.createElement("LI");
    // var textnode=document.getElementById("hey").value;
    // var textnode = document.createTextNode("Water");
    // node.appendChild(textnode);
    // document.getElementById("demo").appendChild(node);
    var item=document.createElement('li');
    item.innerText=text;
    // document.getElementById('add').appendChild(item);
    var list = document.getElementById("add");
    list.insertBefore(item, list.childNodes[0]);
}
document.getElementById('bb').addEventListener("click",function(){
    var element = document.getElementById('add').firstChild;
    element.parentNode.removeChild(element);
});
