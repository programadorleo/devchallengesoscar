import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Error404';


  // tslint:disable-next-line: typedef
  changeTitle(){
    this.title = 'Not Found Error 404';
  }

}
