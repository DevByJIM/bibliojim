import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, AfterViewChecked  } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Book } from 'src/app/models/book';
import { LibroService } from './../../services/libro.service';
import { BookService } from './../../services/book.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit,AfterViewChecked {

  public libros: Libro[] = [];
  public books: Book[] = [];
  
  
  
  constructor(
    private _libroService: LibroService,
    private _bookService: BookService) {
    
  }
  ngAfterViewChecked(): void {
    this.cargarAcordeonLibros();
  }
  
  ngOnInit(): void {  
    this.cargarLibros();
    this.cargarBooks();   
  }

  cargarBooks():void{
    this._bookService.listadoBooks().subscribe({
      next:(v) =>{
        this.books = v.books;
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        console.info('Carga de book Completada'); 
        console.log(this.books);       
      }
    })
  }

  cargarLibros():void{
    this._libroService.listadoLibros().subscribe(
      {
        next: (v) => {
          this.libros = v.libros;
          
        },
        error: (e) => {
          console.error(e);
        },
        complete: () => {
          console.info('Carga de libros Completada');        
        }
      }
    );


  }

  cargarAcordeonLibros(): void{
    const block = document.querySelectorAll('.block')
    const block_header = document.querySelectorAll('.block__header');
    
    
    block_header.forEach( (obj, i) =>{ 
      const icn = obj.querySelector('.icon');
      
      block_header[i].addEventListener('click',()=>{
        
        block.forEach((content, i)=>{
          block[i].classList.remove('activo');
          const icns = block[i].querySelector('.icon');
          if(icns != null) icns.textContent='˅';
        })

        block[i].classList.add('activo');
        if(icn != null) icn.textContent='˄';
       })
    });

  }

}
