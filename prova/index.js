var table = document.querySelector("#data");

function cadastrar() {
    let cadastrado = false;

    let ele = document.querySelector("#ele");    
    let data = [ele.value];

    let rows = document.querySelectorAll("tr");
    
    for(let i = 0; i<rows.length; i++) {
        let cols = rows[i].querySelectorAll("td")[0];
        if(cols !== undefined) {
            if(cols.innerHTML === ele) {
                cadastrado = true;
                break;
            }
        }
    }

    if(!cadastrado) {        
        let row = document.createElement("tr");
      
        for(let i = 0; i < 1; i++) {
            let col = document.createElement("td");

            col.innerHTML = data[i];
 

            row.appendChild(col);
   
        }

        let button = document.createElement("button");
        button.innerHTML = "Apagar";

        button.addEventListener("click", () => {
            apagarButton(button);
        });

        let colButton = document.createElement("td");
        colButton.appendChild(button);

        row.appendChild(colButton);

        table.appendChild(row);
        
    }
}

function apagarButton(element) {
    console.log(element);
    element.parentNode.parentNode.remove();
}   