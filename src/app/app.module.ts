import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { ListbookComponent } from './components/listbook/listbook.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'contact', component: ContactComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AuthorsComponent,
    ListbookComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
