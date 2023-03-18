let contagem = 0;

function novoContato(){
    let main = document.querySelector("main");

    let inputNome = document.querySelector("#input-nome");

    let inputNumero = document.querySelector("#input-numero");


    if(inputNome.value !== "" &&  inputNome.value.length <= 20){

        if(inputNumero.value !== "" && inputNumero.value.length >= 13 && inputNumero.value.length <= 14){
            
            if(contagem <= 6){
                contagem++;
                let novoItem = `<div class="colunas">
                <h3 id="nome">${inputNome.value}</h3>
                <h3 id="numero">${inputNumero.value}</h3>
                </div>`
                main.innerHTML += novoItem;
                    
            }else{
                main.style.height = "100%";
                let novoItem = `<div class="colunas">
                <h3 id="nome">${inputNome.value}</h3>
                <h3 id="numero">${inputNumero.value}</h3>
                </div>`
                main.innerHTML += novoItem;
            }

        }
    }
}