function add(){
    var todo=document.getElementById("input").value;

    var todoClone=document.getElementById("todobox").cloneNode(true);

    todoClone.style.visibility = "visible";
    todoClone.children[0].innerHTML=todo;

    //var todoplace=document.getElementById("todocontaint");

    var outer=document.getElementById("outer");

   

    outer.appendChild(todoClone);
   // outer.insertBefore(todoClone,outer.firstChild);
    document.getElementById("input").value="";

}

function done(todo){
    //var todoplace=document.getElementById("todocontaint");
   var hello = todo.parentElement.parentElement;
   hello.children[0].style.background="yellowgreen";
}

function deletetodo(tododel){
    tododel.parentElement.parentElement.remove();
}



