const input_text = document.querySelector(".input_text");
const output_text = document.querySelector(".output_text");
const copiar = document.querySelector(".copiar");
const mensaje = document.querySelector(".mensaje");


function encriptar () {
  
  if(validarCaracteres() == false) return;

  let txt = input_text.value;
  let txtEncrip = txt.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");

  output_text.value = txtEncrip;
  output_text.style.backgroundImage = "none";
  mensaje.hidden = true;
  copiar.style.visibility = "visible";
}

function desencriptar () {

  if(validarCaracteres() == false) return;

  let txtEncrip = input_text.value;
  let txtDescrip = txtEncrip.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u"); 

  output_text.value = txtDescrip;
  output_text.style.backgroundImage = "none";
  mensaje.hidden = true;
  copiar.style.visibility = "visible";
}

function validarCaracteres (){

  let entrada = input_text.value;
  let salida = output_text.value;
  const caracteres = "abcdefghijklmnñopqrstuvwxyz \n";
  let entradatxt = "";
  let salidatxt = "";
  let juez = true;

  for(let i of entrada){
    if(!caracteres.includes(i)){
      entradatxt = "invalido";
    }
  }

  for(let i of salida){
    if(!caracteres.includes(i)){
      salidatxt = "invalido";
    }
  }

  if(entradatxt == "invalido" || salidatxt == "invalido"){
    juez = false;
    alert("ⓘ Solo letras minúsculas y sin acentos.")
  }
  
  return juez;
}

function copiarTxt () {

  let copiatxt = output_text.value;
  navigator.clipboard.writeText(copiatxt);
  alert("Texto copiado");

  output_text.value = "";
  input_text.value = "";
  mensaje.hidden = false;
  copiar.style.visibility = "hidden";
}