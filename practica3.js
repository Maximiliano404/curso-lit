//practica 3. Lit-HTML

//P1. imports
import {html, render} from 'lit-html';

let plantilla1 = html`<H1>Bienvenido al curso </H1>`;

//render(plantilla1, document.getElementById("demo1"));

const plantilla2 = (str) => html`Bienvenido al curso ${str}`;

//render(plantilla2('de php'), document.getElementById("demo1"));


class Cliente {
    constructor(nombre, correo, titulo){
        this.nombre = nombre;
        this.correo = correo;
        this.titulo = titulo;
    }

    toString (){
      return this.titulo + ' ' + this.correo + ' ' + this.nombre;
    }

    format(){
      return this.toString()
    }
}

const client1 = new Cliente('max','max@mail.com','Lic.');

const plantilla3 = pp => html`${pp.format()}`;
//render(plantilla3(client1),document.getElementById("demo1"));
//render(plantilla3(client1),document.body);
render(plantilla3(client1),document.getElementById("demo1"));
render(plantilla3(client1),document.getElementById("demo2"));
render(plantilla3(client1),document.getElementById("demo3"));