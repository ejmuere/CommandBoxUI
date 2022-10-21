import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-money-market',
  templateUrl: './money-market.component.html',
  styleUrls: ['./money-market.component.css']
})
export class MoneyMarketComponent implements OnInit {

  dataSource = [
    {
      "name": "Greg Murphy",
      "checking": 200,
      "savings": 500,
      "brokerage": 600
    },
    {
      "name": "Allen Smith",
      "checking": 100,
      "savings": 200,
      "brokerage": 300
    },
    {
      "name": "John Doe",
      "checking": 400,
      "savings": 600,
      "brokerage": 700
    },
  ];

  displayedColumns: string[] = ['name', 'checking', 'savings', 'brokerage'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
