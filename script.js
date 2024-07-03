const inputBox=document.querySelector("#input-box");
const listContainer=document.querySelector("#list-container");
const addBtn=document.querySelector(".add-btn");

addBtn.addEventListener("click",()=>{
    if(inputBox.value===""){
        alert("lütfen görev girin")
    } else{
        let li =document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    };
    inputBox.value="";
    saveData()
});

listContainer.addEventListener("click",(ch)=>{
    if(ch.target.tagName==="LI"){
        ch.target.classList.toggle("checked");
        saveData()
    }
    else if(ch.target.tagName==="SPAN"){
        ch.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}