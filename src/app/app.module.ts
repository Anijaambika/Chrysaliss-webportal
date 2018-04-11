import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HrComponent } from './hr/hr.component';
import { FinanceComponent } from './finance/finance.component';
import { AbouthrComponent } from './hr/abouthr/abouthr.component';
import { CompanyComponent } from './company/company.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ResourcesComponent } from './resources/resources.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HrComponent,
    FinanceComponent,
    AbouthrComponent,
    CompanyComponent,
    MarketingComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
