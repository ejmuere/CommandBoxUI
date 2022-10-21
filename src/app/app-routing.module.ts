import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientManagementComponent } from './components/client-management/client-management.component';
import { MoneyMarketComponent } from './components/money-market/money-market.component';
import { TextBoxComponent } from './components/text-box/text-box.component';

const routes: Routes = [

  { path: 'TextBox', component: TextBoxComponent },
  { path: 'MoneyMarket', component: MoneyMarketComponent },
  { path: 'ClientManagement', component: ClientManagementComponent },
  {
    path: "",
    redirectTo: '/TextBox',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
