const size=10;
const black="black";
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


function createGrid(size,colour){
    
    for(let x=0; x<size*size; x++){
        const div=document.createElement('div');
        div.classList.add("item");
        div.style.width=100/size+'%';
        div.style.height=100/size+'%';
        container.appendChild(div);
        div.style.opacity=0;
        div.style.backgroundColor=colour;

        div.addEventListener("mouseenter",
            ()=>{
                if(div.style.opacity<1){
                    div.style.opacity=parseFloat(div.style.opacity)+0.15;
                }
        }
        )
    }
}

function getRandomColor(){
    let letter="0123456789ABCDEF";
    let colour="#";
    for(let x=0; x<6; x++){
        colour+=letter[Math.floor(Math.random()*16)];
    }
    return colour;
}




createGrid(size,getRandomColor);



