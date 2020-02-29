import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PlaceOrderComponent } from "./placeorder/placeorder.component";
import { OnlyOneDigitDirective } from './only-one-digit.directive';
import { GotoNextFieldDirective } from './goto-next-field.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { ViewOrderComponent } from './vieworder/vieworder.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, 
    PlaceOrderComponent, 
    OnlyOneDigitDirective, 
    GotoNextFieldDirective, 
    HeaderComponent, 
    FooterComponent, 
    SideNavComponent, 
    HomeComponent, 
    ContactUsComponent, 
    ViewOrderComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
