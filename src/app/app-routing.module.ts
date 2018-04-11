import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'; 
import{HrComponent}from './hr/hr.component';
import{FinanceComponent}from './finance/finance.component';
import { AbouthrComponent } from './hr/abouthr/abouthr.component';
import { HomeComponent } from './home/home.component';
import{CompanyComponent} from './company/company.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [

  {
    path:'',
    redirectTo: '/company',
    pathMatch:'full'
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'hr',
    component: HrComponent
  },
  {
    path: 'abouthr',
    component: AbouthrComponent
  },
  {
    path: 'finance',
    component: FinanceComponent
  },{
    path :'marketing',
    component:MarketingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
