import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CmspageModule} from './cmspage/cmspage.module';
import { ContactComponent } from './contact/contact.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { LogModule } from './log/log.module';
import { AppRoutingModule } from './app-routing.module';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DataTablesModule } from 'angular-datatables';
import { ActivepageComponent } from './blogspot/activepage/activepage.component';
import { BlogspotModule } from './blogspot/blogspot.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    HomeComponent,
    ServiceComponent,
    AboutusComponent,
    ContactComponent,
    ActivepageComponent,
  ],
  imports: [
    BrowserModule,
    CmspageModule,
    LogModule,
    AuthModule,
    AdminModule,
    BlogspotModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    DataTablesModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
