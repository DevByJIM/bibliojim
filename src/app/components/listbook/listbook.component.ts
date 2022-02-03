import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from './../../services/libro.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {

  public libros: Libro[] = [];

  constructor(private _libroService: LibroService) {

  }

  ngOnInit(): void {
    this._libroService.listadoLibros().subscribe(
      {
        next: (v) => {
          this.libros = v.libros;
          
        },
        error: (e) => {
          console.error(e);
        },
        complete: () => {
          console.info('Completo');          
        }
      }
    );
    // .subscribe(
    //   response =>{

    //   },
    //   error =>{

    //   }
    // );
  }

}
