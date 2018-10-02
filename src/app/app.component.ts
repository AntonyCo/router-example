import { Component } from '@angular/core';
import { PATH_HOME, PATH_DETAIL } from './app.routes.constantes';
import { Router } from '@angular/router';
import { NavService } from './services/NavService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router-example';
  idDetail = 1;
  constructor(private router: Router, private navService:NavService) {

  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      console.log('EVENTS', event);
    })

    this.navService.changeEmitted$.subscribe(path => {
      this.router.navigate(path);
    })
  }
}
