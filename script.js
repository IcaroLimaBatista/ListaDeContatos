let contagem = 0;

function novoContato(){
    let main = document.querySelector("main");

    let inputNome = document.querySelector("#input-nome");

    let inputNumero = document.querySelector("#input-numero");

    let erroNome= document.querySelector(".nome-pessoa p");

    let erroNumero= document.querySelector(".numero p");


    if(inputNome.value !== "" &&  inputNome.value.length <= 20){

        erroNome.style.display = "none"

        if(inputNumero.value !== "" && inputNumero.value.length >= 12 && inputNumero.value.length <= 14){
            
            erroNumero.style.display = "none"

            if(contagem <= 2){
                contagem++;
                let novoItem = `<div class="colunas">
                <h3 id="nome">${inputNome.value}</h3>
                <h3 id="numero">${inputNumero.value}</h3>
                </div>
                <div class= "linha"></div>`
                main.innerHTML += novoItem;
                    
            }else{
                main.style.height = "100%";
                let novoItem = `<div class="colunas">
                <h3 id="nome">${inputNome.value}</h3>
                <h3 id="numero">${inputNumero.value}</h3>
                </div>
                <div class= "linha"></div>`
                main.innerHTML += novoItem;
            }

        }else{
            erroNumero.style.display = "initial"
        }
    }else{
        erroNome.style.display = "initial"
    }
}