const container=document.queryselector("div");
const dimension=16

function createTable(){
    for (let x = 0; x < 16; x++) {
        let row=document.createElement("div");
    
        for (let y = 0; x < 16; y++) {
            row.appendChild(document.createElement("div"));
        }
        container.appendChild("row");
    }
}


