import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { FreeComponent } from './free/free.component';
import { BlogComponent } from './blog/blog.component';
import { ConceptComponent } from './concept/concept.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import {NgOptimizedImage} from '@angular/common';
import { NavDrawer } from './nav-drawer/nav-drawer';
import {MenuStateService} from './services/menu-state.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsComponent,
    AboutComponent,
    FreeComponent,
    BlogComponent,
    ConceptComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavDrawer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
  ],
  providers: [
    MenuStateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
