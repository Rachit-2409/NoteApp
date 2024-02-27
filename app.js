let createBtn = document.querySelector('button');
let deleteBtn = document.getElementById("delete");
let note_box = document.querySelector('.notes-container');
let clearAll =  document.getElementById("clearAll")






function Shownotes(){
    note_box.innerHTML =  localStorage.getItem("notes")
    
}
Shownotes()

function updateStorage(){
    localStorage.setItem("notes",  note_box.innerHTML);
    
}



createBtn.addEventListener('click', ()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    img.src = "images/delete.png";
    img.setAttribute("id", "delete");

    inputBox.appendChild(img)
    note_box.appendChild(inputBox);

});

note_box.addEventListener('click', (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName ==='P'){
        let notes =  document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup =  function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

clearAll.addEventListener('click', ()=>{
    localStorage.clear();
    window.location.reload(true);
});

