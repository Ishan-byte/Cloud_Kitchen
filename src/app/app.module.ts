// Imports
import { RouterModule, Routes } from '@angular/router';

// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/Footer/Footer.component';
import { NavbarComponent } from './Components/Navbar/Navbar.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { MenuComponent } from './Pages/Menu/Menu.component';
import { AboutComponent } from './Pages/About/About.component';
import { ContactComponent } from './Pages/contact/contact.component';

// Routes
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
