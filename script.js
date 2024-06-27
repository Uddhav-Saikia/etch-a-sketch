let size=10;
const black="black";

const body=document.querySelector("body");//body selector var

const ht=document.createElement("h1");//heading
ht.innerText="Etch-a-Sketch";
ht.style.textAlign="center";
body.appendChild(ht);




const buttonContainer=document.createElement("div");//container for buttons
buttonContainer.style.display="flex";
buttonContainer.style.justifyContent="center";
buttonContainer.style.gap="50px";




const btn1=document.createElement("button");//button1
btn1.innerText="Size";
btn1.classList.add("button");
buttonContainer.appendChild(btn1);

const btn2=document.createElement("button");//button2
btn2.innerText="Random";
btn2.classList.add("button");
buttonContainer.appendChild(btn2);

const btn3=document.createElement("button");//button3
btn3.innerText="Black";
btn3.classList.add("button");

buttonContainer.appendChild(btn3);
body.appendChild(buttonContainer);//append into body





const container=document.createElement("div");//canvas container section
body.appendChild(container);
container.style.display="flex";
container.style.flexWrap="wrap";
container.style.width="80%";
container.style.border="1px solid black";
container.style.height="600px";
container.style.width="600px";
container.style.marginLeft="auto";
container.style.marginRight="auto";
container.style.marginTop="20px";




function getRandomColor(){
    let letter="0123456789ABCDEF";
    let colour="#";
    for(let x=0; x<6; x++){
        colour+=letter[Math.floor(Math.random()*16)];
    }
    return colour;
}



function createGridBlack(size){
    
    for(let x=0; x<size*size; x++){
        const div=document.createElement('div');
        div.classList.add("item");
        div.style.width=100/size+'%';
        div.style.height=100/size+'%';
        container.appendChild(div);
        div.style.opacity=0;
        div.style.backgroundColor="black";

        div.addEventListener("mouseenter",
            ()=>{
                if(div.style.opacity<1){
                    div.style.opacity=parseFloat(div.style.opacity)+0.15;
                }
        }
        )
    }
}



function createGridRandom(size){
    
    for(let x=0; x<size*size; x++){
        const div=document.createElement('div');
        div.classList.add("item");
        div.style.width=100/size+'%';
        div.style.height=100/size+'%';
        container.appendChild(div);
        div.style.opacity=0;
        div.style.backgroundColor=getRandomColor();

        div.addEventListener("mouseenter",
            ()=>{
                if(div.style.opacity<1){
                    div.style.opacity=parseFloat(div.style.opacity)+0.15;
                }
        }
        )
    }
}



btn1.addEventListener("click",
    ()=>{
        container.innerHTML="";
        let input=prompt("Enter the size of the Egde of Grid");
        if(input<101){
            size=input;
        }
    }
)



btn2.addEventListener("click",
    ()=>{
        container.innerHTML="";
        createGridRandom(size);
    }
)



btn3.addEventListener("click",
    ()=>{
        container.innerHTML="";
        createGridBlack(size);
    }
)





