import { Component, OnInit } from '@angular/core';
import { Formation } from '../models/Formation'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations:Formation[] = [];
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.formations.push(...[
      new Formation('Angular', 'Formation Angular'),
      new Formation('Java', 'Formation Java'),
      new Formation('Spring', 'Formation Spring'),
    ])

    this.route.data.subscribe((data:Formation[]) => {
      this.formations.push(...data['formations']);
    });
     
    
  }

}
