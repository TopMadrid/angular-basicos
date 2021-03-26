import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string ='';

  borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || ''; // borra el primer elemento del array y lo devuelve
                                                    // Si no quedan devuelve un undefined
                                                    // Usamos || para que en caso de undefined
                                                    // devuelve el valor '' ( cadena vacia).
  }

}

 
