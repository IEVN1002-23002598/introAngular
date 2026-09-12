import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {
  titulo:string = 'Sara Romano'
  duplicaNumero(num:number):number{
    return num*2
  }

  pelicula={
    titulo: "El padrino",
    anio:1972,
    genero:"Crimen/Drama",
    fechaLanzamiento: new Date(),
    precio:345
  }
}

