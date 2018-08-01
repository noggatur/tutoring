import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { AccountComponent } from "./account/account.component";

const APP_ROUTES: Routes = [
  { path: '', component: LandingComponent },
  { path: 'account', component: AccountComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRouterModule {}