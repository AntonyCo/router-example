import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService } from '../services/NavService';
import { PATH_DETAIL } from '../app.routes.constantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private navService:NavService, /*private router:Router*/) { }

  idDetail = 1;

  handleClickGoToDetail(){
    this.navService.emitChange([PATH_DETAIL, this.idDetail]);
    //this.router.navigate([PATH_DETAIL, this.idDetail]);
  }
  
  ngOnInit() {
  }

}
