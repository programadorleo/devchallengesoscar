import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Error404';
  encabezado =  'Bienvenidos al error 404 ';
  subtitulo = 'Este es el error 404';
  // Declaro un array de meses

  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

  // tslint:disable-next-line: typedef
  changeTitle(){
    this.title = 'Not Found Error 404';

  }

}
