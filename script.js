const textArea = document.getElementById("textArea");
const mensaje = document.querySelector(".resultado_texto");

function validadorDeTexto(texto){
  let especiales= /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
  //la siguiente variable nos ayuda a validar letras mayusculas y numeros
  let mayusculas = /[A-Z_0-9]/g;  
  if(texto.match(mayusculas)||texto.match(especiales)){
    return true;
  }else{
    return false;
  }
}


function botonEncriptar(){
  let textoEncriptado = encriptar(textArea.value);
  if(validadorDeTexto(textoEncriptado) === false){
    mensaje.value = textoEncriptado;
  textArea.value ="";
  document.querySelector(".mensaje_resultado").style.backgroundImage = "none";
  document.querySelector(".mensaje_resultado_titulo").innerHTML = "Mensaje Encriptado con exito!!";
  document.querySelector(".mensaje_resultado_texto").setAttribute("hidden", "true");
  }else{
    document.querySelector(".mensaje_resultado_titulo").innerHTML = "Ingrese solo letras minusculas y sin acentos por favor";
    textArea.value ="";
    mensaje.value ="";
  }
}

function encriptar(stringEncriptada){
  let arrayCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  for (let i = 0; i < arrayCodigo.length; i++) {
    if(stringEncriptada.includes(arrayCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(arrayCodigo[i][0], arrayCodigo[i][1]);
    }
  }
  return stringEncriptada
}

function desencriptar(stringEncriptada){
  let arrayCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  for (let i = 0; i < arrayCodigo.length; i++) {
    if(stringEncriptada.includes(arrayCodigo[i][1])) {
      stringEncriptada = stringEncriptada.replaceAll(arrayCodigo[i][1], arrayCodigo[i][0]);
    }
  }
  return stringEncriptada
}

function botonDesencriptar(){
  let textoEncriptado = desencriptar(textArea.value);
  if(validadorDeTexto(textoEncriptado) === false){
    mensaje.value = textoEncriptado;
  textArea.value ="";
  document.querySelector(".mensaje_resultado").style.backgroundImage = "none";
  document.querySelector(".mensaje_resultado_titulo").innerHTML = "Mensaje Desencriptado con exito!!";
  document.querySelector(".mensaje_resultado_texto").setAttribute("hidden", "true");
  }else{
    document.querySelector(".mensaje_resultado_titulo").innerHTML = "Ingrese solo letras minusculas y sin acentos por favor";
    textArea.value ="";
    mensaje.value ="";
  }
}

function botonCopiar() {
  let Copiado = document.querySelector(".resultado_texto").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector(".resultado_texto").value="";
    document.querySelector(".mensaje_resultado_titulo").innerHTML = "Has copiado el mensaje!!";
}