import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ContactComponent } from '../contact/contact.component';
import { ServiceComponent } from '../service/service.component';
import { AboutusComponent } from '../aboutus/aboutus.component';


const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'service',component:ServiceComponent},
  {path:'aboutus',component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmspageRoutingModule { }
