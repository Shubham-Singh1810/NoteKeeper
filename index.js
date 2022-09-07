 

document.getElementById("input-text-div").style.display ="none"
function showbox(){
    document.getElementById("input-text-div").style.display ="block"
}
function saveNote(){
    let inputText = document.getElementById("inputText").value;
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj =[];
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.push(inputText);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    document.getElementById("inputText").value =""
    showNotes();
}
function showNotes(){
    let html = "";
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj =[];
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.forEach((e, i)=>{
        html += `<p class="" >${i+1}. ${e} <span class="delBtn"  id="${i}" onclick="deletebtn(this.id)">-</span></p>`
    })
    if(html.length!=0){
        document.getElementById("myNotes").innerHTML = html
    }
    if(html.length==0){
        document.getElementById("myNotes").innerHTML = ""

    }
    document.getElementById("input-text-div").style.display ="none"
      
}
function deletebtn(i){
    notesObj.splice(i, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes()
}
showNotes()