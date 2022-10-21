import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MoneyMarketComponent } from './components/money-market/money-market.component';
import { MatTableModule } from '@angular/material/table';
import { ClientManagementComponent } from './components/client-management/client-management.component';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { Account360Component } from './components/account360/account360.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    MoneyMarketComponent,
    ClientManagementComponent,
    Account360Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
