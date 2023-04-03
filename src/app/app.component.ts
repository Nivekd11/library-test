import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  configuration = {
    fontSize: 24,
    fontColor: '#890b33',
    fontFamily: 'Roboto',
    value : 'Hola mundo'
  };

  onerror(error: Event) {
    console.error("Error");
    console.error(error);
  }

  oncomplete(success: Event) {
    console.log('Complete:', success);
  }
}
