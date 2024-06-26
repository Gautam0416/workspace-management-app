import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SelectServiceComponent } from './pages/select-service/select-service.component';
import { RentWorkspaceComponent } from './pages/rent-workspace/rent-workspace.component';
import { AuthGuard } from './guards/auth-guard';
import { NotAuthGuard } from './guards/not-auth-guard';
import { SelectLocationComponent } from './pages/select-location/select-location.component';
import { BillPaymentComponent } from './pages/bill-payment/bill-payment.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SuccessPaymentComponent } from './components/success-payment/success-payment.component';
import { CancelPaymentComponent } from './components/cancel-payment/cancel-payment.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent , canActivate: [NotAuthGuard]},
  { path: 'signup', component: SignupComponent , canActivate: [NotAuthGuard]},
  { path: 'homepage', component: HomepageComponent },
  { path: 'select-service', component: SelectServiceComponent, canActivate: [AuthGuard] },
  { path: 'rent-workspace', component: RentWorkspaceComponent, canActivate: [AuthGuard] },
  { path: 'select-location', component: SelectLocationComponent, canActivate: [AuthGuard] },
  { path: 'bill-payment', component: BillPaymentComponent, canActivate: [AuthGuard]},
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
  { path: 'success', component: SuccessPaymentComponent, canActivate: [AuthGuard]},
  { path: 'cancel', component: CancelPaymentComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}