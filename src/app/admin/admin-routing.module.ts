import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../auth/auth.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ListcategoriesComponent } from './manage-categories/listcategories/listcategories.component';
import { AddcategoriesComponent } from './manage-categories/addcategories/addcategories.component';
import { EditcategoriesComponent } from './manage-categories/editcategories/editcategories.component';
import { AddblogComponent } from './manage-blogs/addblog/addblog.component';
import { ListblogComponent } from './manage-blogs/listblog/listblog.component';
import { EditblogComponent } from './manage-blogs/editblog/editblog.component';


const routes: Routes = [
  {path:'admin',component:AdminComponent,children:[
    {path:'admin-dashboard',component:AdminDashboardComponent},
    {path:'manage-blogs',component:ManageBlogsComponent,children:[
      {path:'addblog',component:AddblogComponent},
      {path:'listblog',component:ListblogComponent},
      {path:'ediblog/:id',component:AddblogComponent},
    ]},
    {path:'manage-pages',component:ManagePagesComponent},
    {path:'manage-categories',component:ManageCategoriesComponent,children:[
      {path:'addcategories',component:AddcategoriesComponent},
      {path:'listcategories',component:ListcategoriesComponent},
    ]},
  ], canActivate:[AuthGuard]},
  {path:'editcategories/:id',component:EditcategoriesComponent},
  // {path:'editblog/:id',component:EditblogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
