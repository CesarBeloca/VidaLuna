import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {BlogComponent} from './blog/blog.component';
import {CartComponent} from './cart/cart.component';
import {ConceptComponent} from './concept/concept.component';
import {EventsComponent} from './events/events.component';
import {FreeComponent} from './free/free.component';
import {LoginComponent} from './login/login.component';
import {ProductComponent} from './product/product.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'cart', component: CartComponent},
  {path: 'concept', component: ConceptComponent},
  {path: 'events', component: EventsComponent},
  {path: 'free', component: FreeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: ''},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
