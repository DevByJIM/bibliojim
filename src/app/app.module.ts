import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LibroService } from './services/libro.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { ListbookComponent } from './components/listbook/listbook.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { AddlibroComponent } from './components/addlibro/addlibro.component';
import { BookService } from './services/book.service';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AuthorsComponent,
    ListbookComponent,
    ErrorComponent,
    HomeComponent,
    AddlibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LibroService,
    BookService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
