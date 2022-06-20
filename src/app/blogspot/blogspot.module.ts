import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogspotRoutingModule } from './blogspot-routing.module';
import { ReadmoreComponent } from './readmore/readmore.component';
import { ReadmorefeaturedComponent } from './readmorefeatured/readmorefeatured.component';


@NgModule({
  declarations: [ReadmoreComponent, ReadmorefeaturedComponent],
  imports: [
    CommonModule,
    BlogspotRoutingModule
  ]
})
export class BlogspotModule { }
