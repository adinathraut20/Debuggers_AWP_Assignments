function addpost()
{
   let usercmt =  document.getElementById("tp").value;
   if (usercmt =="")
   {
     window.alert("ENTER SOMETHING");
     return;
   }

   let newElement =  document.getElementById("cnt").cloneNode(true);
   newElement.style.width = "100vh";
   newElement.style.margin = "5px";
   newElement.removeAttribute("id");
   newElement.style.visibility = "visible";

   newElement.children[0].style.marginLeft = "15px";
   newElement.children[0].innerHTML  = usercmt;
   let temp = document.getElementById("child1");
   //temp.appendChild(newElement);
  temp.insertBefore(newElement,temp.firstChild);
  document.getElementById("tp").value = "";


}

function dltchild(BtnElement){
    BtnElement.parentElement.parentElement.remove();
}


function editTask(r)
{
    let person = prompt("edit message");
    if(person != null)
    {
        //refElement.parentElement.children().first().html(person);
        r.parentElement.parentElement.children[0].innerHTML=person;
      
    }
}

function check(r){
  r.parentElement.parentElement.children[0].style.textDecoration = "line-through";
}

window.addEventListener("keypress", function(e) {
    if (e.which == 13)
     {
        addpost();
     }
} )