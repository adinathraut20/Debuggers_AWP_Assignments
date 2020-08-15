let counter = 1;
function liker() {
    counter++;
    document.getElementById("btn").innerHTML =  "LIKE " + counter;
}

let ctr = 1;
function comment() {
    ctr++;
    var parent = document.createElement("div");
    parent.style.display = "flex";
    parent.style.justifyContent = "space-between";
    parent.style.padding = "8px";

    var child1 = document.createElement("div");
    child1.style.background = "tomato";
    
    var child2 = document.createElement("button");
    child2.textContent = "DELETE";
    child2.style.padding = "10px";
    child2.style.color = "black";
    child2.style.marginLeft = "550px";
    parent.appendChild(child1);
    parent.appendChild(child2);
    let usercmt = document.getElementById("input").value;
    
    if (usercmt === " ")
    {
        return;
    }
    child1.textContent = usercmt;
    let c = document.getElementById("cmt");
    c.appendChild(parent);
    document.getElementById("btn2").innerHTML = "COMMENT HERE " + ctr;
    document.getElementById("input").value = " ";
    child2.onclick = function () {
        this.parentElement.remove(this);
    }
    
}
