import { html, render } from 'lit-html';

const plantilla = (subtotal, impuestos) => html`${Math.round(subtotal * impuestos)}`;
const nodo = document.querySelector('section');


render(plantilla(100, 1.16), nodo);


// Plantilla condicionada
const plantilla2 = (valorDeClass, flag) => {
    if (flag) {
        return html`<button class=${valorDeClass} disabled>Pulsame!!</button>`
    }
    return html`<button class=${valorDeClass}>Pulsame!!</button>`

}

const nodo2 = document.getElementById('a');
const nodo3 = document.getElementById('b');

render(plantilla2('buttons', true), nodo2);
render(plantilla2('buttons', false), nodo3);

let contador = 1; 

function handler() { 
    console.log(contador); 
    contador++; 
    let ele = document.getElementById("demo7"); 
    ele.innerHTML = contador;
} 

// Plantilla para gestion de eventos
const plantilla4 = () => html`
<div id="demo7"></div>
<button @click=${handler}>Pulsa</button>`; 
// Renderiza la plantilla 4

render(plantilla4(),document.getElementById('demo8'));

//Plantillas anidadas

const hh = html`<h1>Encabezado</h1>`; 
const pagina = html`${hh} <div>Esto es para la página</div>`; 
// Renderiza
render(pagina,document.getElementsByTagName('p')[0]);


//plantilla condicionada

let user = { isloggedIn: true, nombre: "Gabriel" } 
const plantilla5 = html`
    ${user.isloggedIn 
      ? html`Bienvenido ${user.nombre}` 
      : html`<a href='#'>Ingresa a la página link</a>` }`; 
// Renderiza la plantilla 5

 render(plantilla5,document.getElementById('demo9')); 
 
 //plantilla 6 
 function obtenMensaje() { 
    if (user.isloggedIn) { return html`Bienvenido ${user.nombre}`; } 
    return html`Por favor ingresa al registro...`;
} 

 const plantilla6 = html`${obtenMensaje()}`;

 render(plantilla6,document.getElementById('demo10'));

  //plantilla 7 

let items = ["Azul", "Rojo", "Amarillo", "Azul", "Verde", "Rojo"];
const plantilla7 = html`
  <ul>
    ${items.map((item) => html`<li>${item.toUpperCase()}</li>`)}
  </ul>
`;
render(plantilla7,document.getElementById('demo11'));

 //plantilla 8

const itemTemplates = [];
for(const I of items) {
    itemTemplates.push(html`<li>${I.toLowerCase()}</li>`);
}

 

const plantilla8 = html`
 <ol>
    ${itemTemplates}
  </ol>
`;

render(plantilla8,document.getElementById('demo12'));

 //plantilla 9

import { repeat } from 'lit-html/directives/repeat';  // Directiva

let empleados = [
    { id: '1', nombre: 'Gabriel', apellido: 'Guerrero' },
    { id: '2', nombre: 'Everardo', apellido: 'Jerónimo' },
    { id: '3', nombre: 'Roberto', apelligo: 'Meza' },
    { id: '4', nombre: 'Jesús', apellido: 'Díaz' },
    { id: '5', nombre: 'Laura', apellido: 'Yee' },
    { id: '6', nombre: 'Beatriz', apellido: 'Tellez' }
];

 

const lista = (empleados) => html`<ul type="square">
    ${repeat(empleados, (ee) => ee.id, (ee, index) =>
    html`<li>${index}: ${ee.apellido}, ${ee.nombre}</li>`)}  </ul>`;

 

// Renderiza la lista de empleados
render(lista(empleados), document.getElementById("demo13"));


//plant1lla 10

let usuario = {
    isAdmin: true
};

const nada = html`${usuario.isAdmin ? html`<button>Agregar</button>` : ''}`;


render(nada,document.getElementById("demo14"));