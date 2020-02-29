import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaceOrderComponent } from './placeorder/placeorder.component';
import { ViewOrderComponent } from './vieworder/vieworder.component';
import { ContactUsComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "placeorder", component: PlaceOrderComponent},
  {path: "vieworders", component: ViewOrderComponent},
  {path: "contactus", component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
