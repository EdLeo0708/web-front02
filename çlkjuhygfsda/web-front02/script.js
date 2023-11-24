const button =  document.querySelector("button");
const inputNota = document.querySelector("#Nota");

//Criando um elemento p
const pMensagem = document.createElement("p")


function clearForm(){
    inputNota.value = ""
}

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(inputNota.value);

    //validações 
    if (inputNota.value === ''){
        //alert("Campo obrigatório");
        pMensagem.textContent = "Campo Obrigatório";
        inputNota.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class","error")
        return false;
    }
    //lógica 
    if(inputNota.value >= 6){
        alert("Vc está aprovado");
    } else {
        alert("Vc está reprovado");
    }

    pMensagem.classList.add("d-done");
    clearForm();
})