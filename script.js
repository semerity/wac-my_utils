const tdL = document.getElementById("ul-todo");
const Dl = document.getElementById("ul-done");
const btntask = document.getElementById("button-newtask");
// console.log(addtask);

btntask.addEventListener("click" , () => {
    var LI = document.createElement("li");
    var tname = prompt("Quelle est votre nouvelle tache ?");
    if (tname == "") {
        alert("pas d'input, pas de tache")
        return undefined;
    }
    var tcheck = document.createElement("input");
    var tlabel = document.createElement("label");
    var tdelbtn = document.createElement("button");
    
    // checkbox
    tcheck.type = "checkbox";
    tcheck.name = tname;
    tcheck.id = tname;
    
    // passage de a faire vers finie
    tcheck.addEventListener("click", ()=>{
        Dl.appendChild(LI);
        tlabel.style.textDecoration = "line-through";
        tcheck.disabled = true;
    })

    // label checkbox aka la tache
    tlabel.for = tname;
    tlabel.innerText = tname;

    // button pour supprimer.
    tdelbtn.innerText ="X";
    tdelbtn.classList.add("button-task")
    tdelbtn.addEventListener("click",()=>{
        if (window.confirm("Supprimer ? vraiment ?")) {
            LI.parentNode.removeChild(LI);
        };
    });

    // add dans le dom/html
    LI.appendChild(tcheck);
    LI.appendChild(tlabel);
    LI.appendChild(tdelbtn);
    tdL.appendChild(LI);
    // console.log(LI);
    // console.log(tdarr);
});