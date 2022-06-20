import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivepageComponent } from './activepage/activepage.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { ReadmorefeaturedComponent } from './readmorefeatured/readmorefeatured.component';


const routes: Routes = [
  {path:'activepage',component:ActivepageComponent},
  {path:'readmore/:id',component:ReadmoreComponent},
  {path:'readmorefeatured/:id',component:ReadmorefeaturedComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogspotRoutingModule { }
