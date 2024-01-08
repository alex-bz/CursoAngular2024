import { Component, OnInit } from '@angular/core';

interface Tarjeta {
  titulo:string;
  subtitulo:string;
  num?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'My-dream-app';
  public ArregloTarjetas: Tarjeta [] = [];

ngOnInit(): void {
  this.ArregloTarjetas = [
    {titulo:'2004', subtitulo: '2004',num: 6},
    {titulo:'2005', subtitulo: '2005',num: 8},
    {titulo:'2006', subtitulo: '2006',num: 11},
    {titulo:'2007', subtitulo: '2007',num: 11},
    {titulo:'Treaty of Rome', subtitulo: 'Treaty of Rome',num: 17},
    {titulo:'2008', subtitulo: '2008',num: 14},
    {titulo:'2009', subtitulo: '2009',num: 13},
    {titulo:'Monetary Union', subtitulo: 'Monetary Union',num: 20},
    {titulo:'2010', subtitulo: '2010',num: 16},
    {titulo:'2011', subtitulo: '2011',num: 20},
    {titulo:'2012', subtitulo: '2012',num: 16},
    {titulo:'10 Years of Euro', subtitulo: '10 Years of Euro',num: 22},
    {titulo:'2013', subtitulo: '2013',num: 31},
    {titulo:'2014', subtitulo: '2014',num: 31},
    {titulo:'2015', subtitulo: '2015',num: 36},
    {titulo:'Flag of Europe', subtitulo: 'Flag of Europe',num: 23},
    {titulo:'2016', subtitulo: '2016',num: 36},
    {titulo:'2017', subtitulo: '2017',num: 36},
    {titulo:'2018', subtitulo: '2018',num: 44},
    {titulo:'2019', subtitulo: '2019',num: 40},
    {titulo:'2020', subtitulo: '2020',num: 43},
    {titulo:'2021', subtitulo: '2021',num: 37},
    {titulo:'2022', subtitulo: '2022',num: 34},
    {titulo:'Erasmus', subtitulo: 'Erasmus',num: 23},
    {titulo:'2023', subtitulo: '2023',num: 44},
    {titulo:'2024', subtitulo: '2024',num: 1},
  ]
}
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'My-dream-app';
// }
