import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-account360',
  templateUrl: './account360.component.html',
  styleUrls: ['./account360.component.css']
})
export class Account360Component implements OnInit {

  name = 'Allen Smith';

  constructor() { }

  ngOnInit(): void {
  }

}
