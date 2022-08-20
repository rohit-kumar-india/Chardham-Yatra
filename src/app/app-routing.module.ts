import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChardhamHelicopterPackageComponent } from './chardham-helicopter-package/chardham-helicopter-package.component';
import { ChardhamPackageComponent } from './chardham-package/chardham-package.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GujratPackageComponent } from './gujrat-package/gujrat-package.component';
import { KedarnathHelicopterPackageComponent } from './kedarnath-helicopter-package/kedarnath-helicopter-package.component';
import { KerlaPackageComponent } from './kerla-package/kerla-package.component';
import { MysorePackageComponent } from './mysore-package/mysore-package.component';
import { RajasthanPackageComponent } from './rajasthan-package/rajasthan-package.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'mysore-package', component: MysorePackageComponent },
  { path: 'gujrat-package', component: GujratPackageComponent },
  { path: 'rajasthan-package', component: RajasthanPackageComponent },
  { path: 'kerla-package', component: KerlaPackageComponent },
  { path: 'chardham-package', component: ChardhamPackageComponent },
  { path: 'chardham-helicopter-package', component: ChardhamHelicopterPackageComponent },
  { path: 'kedarnath-helicopter-package', component: KedarnathHelicopterPackageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactUsComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
