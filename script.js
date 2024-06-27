const size=10;
const container=document.querySelector("div");
const body=document.querySelector("body");
body.style.display="flex";
body.style.justifyContent="center";
body.style.alignItems="center";

container.style.display="flex";
container.style.flexWrap="wrap";
container.style.width="80%";
container.style.border="1px solid black";
container.style.height="600px";
container.style.width="600px";




function createGrid(size){
    const div=document.createElement('div');
    for(let x=0; x<size*size; x++){
        div.classList.add("item");
        div.style.width=100/size+'%';
        div.style.height=100/size+'%';
        container.appendChild(div);
    }
    // div.addEventListener("mouseenter",
    //     div.style.backgroundColor+=
    // )
}

createGrid(10);



