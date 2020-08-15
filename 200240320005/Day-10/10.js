



function LikeMe(btnElement){
    let likecount = Number(btnElement.children[0].innerHTML);
    likecount++;
    btnElement.children[0].innerHTML=likecount;
}

function cmt(btnElement){
    let usercmt = btnElement.parentElement.children[1].children[0].value;

    let newElement = btnElement.parentElement.parentElement.children[2].children[0].children[0].cloneNode(true);

    newElement.children[0].innerHTML=usercmt;

    let cmtbox= btnElement.parentElement.parentElement.children[2].children[0];

    //cmtbox.appendChild(newElement);
    cmtbox.insertBefore(newElement,cmtbox.firstChild);


}

let commentHere = function (btnElementComment) {
    const commentBox =
      btnElementComment.parentElement.parentElement.parentElement
        .children[2];
  
    let newElement = commentBox.children[0].cloneNode(true);
  
    // lets access teh input box
    const inputElem =
      btnElementComment.parentElement.parentElement.children[1].children[0];
  
    newElement.children[0].innerHTML = inputElem.value;
  
    // clear the input
    inputElem.value = "";
  
    // add the new element to comment box
    commentBox.insertBefore(newElement, commentBox.firstChild);
  };

