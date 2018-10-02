import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/NavService';
import { PATH_HOME } from '../app.routes.constantes';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private navService:NavService, private route: ActivatedRoute, /*private router:Router*/) { }


  handleClickGoToHome(){
     this.navService.emitChange([PATH_HOME]);
    //this.router.navigate([PATH_HOME]);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log('isDetail', params.get('idDetail'));
      });
    
  }

}
