document.getElementById("button").addEventListener("click", validaFormulario)

function validaFormulario(){

  if(document.getElementById("name").value != "" &&
     document.getElementById("email").value != "" &&
     document.getElementById("password").value != "" ){

    alert("Prontinho!")
  }else{
    alert("Por favor, preencha os campos name, email e password.")
  }
}

            