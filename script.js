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
    
    for(let x=0; x<size*size; x++){
        const div=document.createElement('div');
        div.classList.add("item");
        div.style.width=100/size+'%';
        div.style.height=100/size+'%';
        container.appendChild(div);
        div.style.opacity=0;

        div.addEventListener("mouseenter",
            ()=>{
                div.style.backgroundColor=randomColor;
                if(div.style.opacity<1){
                    div.style.opacity=parseFloat(div.style.opacity)+0.15;
                }
        }
        )
    }
}

function randomColor(){
    r=Math.floor(Math.random()*255);
    g=Math.floor(Math.random()*255);
    b=Math.floor(Math.random()*255);
 
    const colour=toString(rgb(r,g,b));
    return colour;
}




createGrid(10);



