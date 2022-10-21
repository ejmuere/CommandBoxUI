import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-money-market',
  templateUrl: './money-market.component.html',
  styleUrls: ['./money-market.component.css']
})
export class MoneyMarketComponent implements OnInit {
  name = '';
  source_account = '';
  target_account = '';
  amount='';
  dataSource = [
    {
      "person_name": this.name,
      "source_account_type": this.source_account,
      "target_account_type": this.target_account,
      "amount": this.amount
    }
  ];

  displayedColumns: string[] = ['person_name', 'source_account_type', 'target_account_type', 'amount'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //person_name='+person_name+"target_account_type="+target_account_type+"&source_account_type="+source_account_type+"&amount="+amount 
    this.name = this.route.snapshot.queryParams['person_name'];
    this.source_account = this.route.snapshot.queryParams['source_account_type'];
    this.target_account = this.route.snapshot.queryParams['target_account_type'];
    this.amount=this.route.snapshot.queryParams['amount'];
  }

}
