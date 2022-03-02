import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alura.Angular.MyBank';
  transferences: any[] = [];

  transfer($event) {
    console.log($event);
    const transfer = { ...$event, date: new Date() };
    this.transferences.push(transfer);
  }

}
