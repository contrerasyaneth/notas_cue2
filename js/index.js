//constantes iniciales
const main = document.getElementById('main');
const contenidoInicial = document.getElementById('contenido-1');
const mainBtn = document.getElementById('main-btn');

// constantes para almacenar contenido
const contenido2 = document.getElementById('contenido-2');
const contenidoNotas = document.getElementById('cont-notas');

//crear una variable global para almacenar elementos
let mainForm;

//variable de forma globales
let titulo;
let nota;
let fecha;

main.addEventListener('click', (e) => {
//// valido que es este elementn btn main 
  if (e.target === mainBtn) {
    contenidoInicial.remove();

    contenido2.append(agregarNota);

    //asignar a mainForm el elemento de forma
    mainForm = document.getElementById('main-form');  
  }

  //para confirmar si el button es de borrar
  if (e.target.id==='borrar-nota') {
    let checkClick= confirm("Seguro que deseas borrar el elemento?");
    if(checkClick==true){
      contenido2.remove();
    }
  }

// para encontrar el elemento submit de la forma
if(e.target.id === 'agregar-nota'){
  //crear escuchador de evento para click en el buton agregar
  mainForm.addEventListener('submit',(event) => {
  //evitar que la accion por defecto pase
  event.preventDefault();

  //crear constantes de los inputs para obtener informacion de la forma
  titulo = document.getElementById('titulo');
  nota = document.getElementById('nota');
  fecha = document.getElementById('fecha');

  //crear objeto para guardar informacion 
  const formulario = {
    titulo1: titulo.value,
    notaText: nota.value,
    fecha1: fecha.value,
  }

  //deconstruir el objeto
  const { titulo1, notaText, fecha1 } = formulario;

  // creo constante con informacion
  const notaHtmlConInfo = agregarNotaDinamico(titulo1,notaText, fecha1);
  
  //insertar HTML nuevo
  contenidoNotas.append(notaHtmlConInfo);

  //reiniciar los valores de la forma
  titulo.value = '';
  nota.value = '';
  fecha.value = '';
   });
  }
});
 

// crear elemento con html
const agregarNota = document.createElement('div');
agregarNota.innerHTML = `
<form id="main-form">
          <input type ="text" name="titulo" id="titulo"
          placeholder="Agregar titulo">
          <input type="text" name="nota" placeholder="Agregar tu nota" id="nota">
          <input type="text" name="fecha" placeholder="Agregar tu fecha" id="fecha">
            <div class="botones">   
          <button type ="button" id="borrar-nota"> <img class="basurero" src="./Assets/images/basurero.jpg" alt=""> Borrar nota</button>
          <button type ="submit" id="agregar-nota"><img class="nota" src="./Assets/images/nota2.png">  Agregar nota</button>
          </form>
  `;
  
// Funcion para agregar html dinamico en base a los resultados de la forma
function agregarNotaDinamico(titulo, nota, fecha) {
  const notaEnHtml = document.createElement('div');
  notaEnHtml.innerHTML = `
    <h2>${titulo}</h2>
    <p>${nota}</p>
    <p>${fecha}</p>
  `

  return notaEnHtml;
}