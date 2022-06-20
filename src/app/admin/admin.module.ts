import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { AddcategoriesComponent } from './manage-categories/addcategories/addcategories.component';
import { ListcategoriesComponent } from './manage-categories/listcategories/listcategories.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EditcategoriesComponent } from './manage-categories/editcategories/editcategories.component';
import { DataTablesModule } from 'angular-datatables';
import { AddblogComponent } from './manage-blogs/addblog/addblog.component';
import { ListblogComponent } from './manage-blogs/listblog/listblog.component';
import { EditblogComponent } from './manage-blogs/editblog/editblog.component';


@NgModule({
  declarations: [AdminComponent, AdminDashboardComponent, ManageBlogsComponent, ManageCategoriesComponent, ManagePagesComponent, AddcategoriesComponent, ListcategoriesComponent, EditcategoriesComponent, AddblogComponent, ListblogComponent, EditblogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MDBBootstrapModule.forRoot(),
    DataTablesModule    
  ]
})
export class AdminModule { }
