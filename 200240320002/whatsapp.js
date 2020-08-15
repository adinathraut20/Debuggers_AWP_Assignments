function send(){
    let parent = document.createElement("div");
    
    let msg = document.getElementById("msg").value;
    if (msg == "")
    {
        return;
    }
    parent.style.display = "flex";
    parent.style.justifyContent = "space-between";
   
    let child1 = document.createElement("div");
    child1.style.background = "lightgreen";
    child1.style.borderRadius = "50px";
    child1.style.border = "0.5px solid grey";
    child1.style.margin = "8px";
    child1.style.flex = "3";    
    let child2 = document.createElement("button");
    child2.innerHTML = "Delete"; 
    child2.style.width = "50px";
    child2.style.height = "50px";
    child2.style.flex = "0.5";
    child2.onclick = function (){
        this.parentElement.remove(this);
    }
    parent.appendChild(child1);
    parent.appendChild(child2);

    child1.textContent = msg;

    let temp = document.getElementById("Middle");
    temp.appendChild(parent);
    document.getElementById("msg").value= "";
}
