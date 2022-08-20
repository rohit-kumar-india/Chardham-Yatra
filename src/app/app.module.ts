import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MysorePackageComponent } from './mysore-package/mysore-package.component';
import { GujratPackageComponent } from './gujrat-package/gujrat-package.component';
import { RajasthanPackageComponent } from './rajasthan-package/rajasthan-package.component';
import { KerlaPackageComponent } from './kerla-package/kerla-package.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ChardhamPackageComponent } from './chardham-package/chardham-package.component';
import { ChardhamHelicopterPackageComponent } from './chardham-helicopter-package/chardham-helicopter-package.component';
import { KedarnathHelicopterPackageComponent } from './kedarnath-helicopter-package/kedarnath-helicopter-package.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MysorePackageComponent,
    GujratPackageComponent,
    RajasthanPackageComponent,
    KerlaPackageComponent,
    AboutComponent,
    ContactUsComponent,
    EnquiryComponent,
    ChardhamPackageComponent,
    ChardhamHelicopterPackageComponent,
    KedarnathHelicopterPackageComponent,
    ContactFormComponent,
    ServicesComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
