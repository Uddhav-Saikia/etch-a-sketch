let size=10;
const black="black";

const body=document.querySelector("body");//body selector var
body.style.backgroundColor="#FAEBD7";

const ht=document.createElement("h1");//heading
ht.innerText="Etch-a-Sketch";
ht.style.color="#c96161"
ht.style.textAlign="center";
body.appendChild(ht);


const introText=document.createElement("div");
introText.innerText="Select the size and colour choices and drag mouse over the text :)";
introText.style.paddingBottom="20px"; 
introText.style.textAlign="center";
body.appendChild(introText);


const buttonContainer=document.createElement("div");//container for buttons
buttonContainer.style.display="flex";
buttonContainer.style.justifyContent="center";
buttonContainer.style.gap="50px";




const btn1=document.createElement("button");//button1
btn1.innerText="Size";
btn1.classList.add("button");
btn1.style.fontFamily="courier new";
btn1.style.backgroundColor="#66CDAA";
btn1.style.border="0px";
btn1.style.borderRadius="5px";
btn1.style.padding="8px";
buttonContainer.appendChild(btn1);//append into butt container

const btn2=document.createElement("button");//button2
btn2.innerText="Random";
btn2.classList.add("button");
btn2.style.fontFamily="courier new";
btn2.style.backgroundColor="#66CDAA";
btn2.style.border="0px";
btn2.style.borderRadius="5px";
btn2.style.padding="8px";
btn2.style.fontFamily="courier new"
buttonContainer.appendChild(btn2);//append in butt conatainer

const btn3=document.createElement("button");//button3
btn3.innerText="Black";
btn3.style.fontFamily="courier new";
btn3.style.fontFamily="courier new";
btn3.style.backgroundColor="#66CDAA";
btn3.style.border="0px";
btn3.style.borderRadius="5px";
btn3.style.padding="8px"
btn3.classList.add("button");
buttonContainer.appendChild(btn3);//append in butt container


body.appendChild(buttonContainer);//append buttoncontainer into body




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


//btn1 event listeners
btn1.addEventListener("click",
    ()=>{
        container.innerHTML="";
        let input=prompt("Enter the size of the Egde of Grid\nKeep value under 100 to prevent overflow");
        if(input<101){
            size=input;
        }
    }
)
btn1.addEventListener("mousedown",
    ()=>{
        btn1.style.filter="brightness(80%)";
    }
)
btn1.addEventListener("mouseup",
    ()=>{
        btn1.style.filter="brightness(100%)";
    }
)


btn2.addEventListener("click",
    ()=>{
        container.innerHTML="";
        createGridRandom(size);
    }
)
btn2.addEventListener("mousedown",
    ()=>{
        btn2.style.filter="brightness(80%)";
    }
)
btn2.addEventListener("mouseup",
    ()=>{
        btn2.style.filter="brightness(100%)";
    }
)



btn3.addEventListener("click",
    ()=>{
        container.innerHTML="";
        createGridBlack(size);
    }
)
btn3.addEventListener("mousedown",
    ()=>{
        btn3.style.filter="brightness(80%)";
    }
)
btn3.addEventListener("mouseup",
    ()=>{
        btn3.style.filter="brightness(100%)";
    }
)


//adding the final hr
const hr=document.createElement("hr");
body.appendChild(hr);

//final text
const footer=document.createElement("p");
footer.innerText="Uddhav Copyright 2024 hehehehehee";
footer.style.textAlign="center";
body.appendChild(footer);



