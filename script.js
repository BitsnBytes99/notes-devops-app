function saveNote(){

let note = document.getElementById("note").value

if(note.trim() === ""){
alert("Please write a note")
return
}

let li = document.createElement("li")

li.innerText = note

document.getElementById("notesList").appendChild(li)

document.getElementById("note").value = ""

}