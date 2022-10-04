import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },  
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'person-circle' },

  ];

}
