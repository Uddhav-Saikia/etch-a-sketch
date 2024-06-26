const size=10;
const container=document.getElementById("#kela");
container.style.display="flex";
container.style.flexWrap="wrap";

function createGrid(size){
    for(let x; x<size ; x++){
        const div=document.createElement("div");
        div.style.width=100/size+'%';
        container.appendChild(div);
    }
}

createGrid(size);



