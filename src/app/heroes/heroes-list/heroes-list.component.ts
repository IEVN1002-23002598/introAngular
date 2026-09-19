import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {
  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImage=!this.muestraImage
  }

  heroes:any[]=[
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:"Goku",
      descripcion:"Kame hame Ha",
      race:"Saiyan",
      Ki:9000
    },
     {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre:"Vegeta",
      descripcion:"Final Flash",
      race:"Saiyan",
      Ki:8500
    },
     {
      imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
      nombre:"Picolo",
      descripcion:"Picololololo",
      race:"Saiyan",
      Ki:7200
    },
     {
      imagen:"https://dragonball-api.com/characters/bulma.webp",
      nombre:"Bulma",
      descripcion:"Bulmaa es el mejor",
      race:"Saiyan",
      Ki:2500
    },
  ]

}
