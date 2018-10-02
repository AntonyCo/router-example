import { Component, OnInit } from '@angular/core';
import { Connaissance } from '../models/Connaissance';

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {

  connaissances:Connaissance[] = [];
  constructor() { }

  ngOnInit() {
    this.connaissances.push(...[
      new Connaissance('Développement Nodejs'),
      new Connaissance('Développement Angular'),
    ])
  }

}
