import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  libros$ = this.bookSvc.listadoBooks;

  constructor(private bookSvc:BookService) { }

  ngOnInit(): void {
  }

}
