import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Book } from 'src/app/models/book';
import { LibroService } from './../../services/libro.service';
import { BookService } from './../../services/book.service';
import { Global } from 'src/app/services/global';
import { EMPTY } from 'rxjs';
import { I18nContext } from '@angular/compiler/src/render3/view/i18n/context';


@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit, AfterViewChecked {

  public libros!: Libro[];
  public books!: Book[];
  public urlcover: String = Global.urlCover;
  private onoff: boolean = true;

  constructor(
    private _libroService: LibroService,
    private _bookService: BookService) {

  }
  ngAfterViewChecked(): void {

    this.cargarEventAcordion();
    
  }

  ngOnInit(): void {
    this.cargarBooks();
  }

  cargarBooks(): void {
    this._bookService.listadoBooks().subscribe({
      next: (v) => {
        this.books = v.books;
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        console.info('Carga de book Completada');
        //console.log(this.books);
      }
    })
  }

  cargarLibros(): void {
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

  cargarEventAcordion(): void {


    if (this.onoff) {
      const iconos = document.querySelectorAll('.icon');
      const covers = document.querySelectorAll('.block__cover');


      iconos.forEach((icon, i) => {
        icon.addEventListener('click', (e) => {          
          const padre = icon.parentElement?.parentElement;
          if(padre !=null) this.showFicha(padre);
        });
      });

      covers.forEach((cover, i) => {
        cover.addEventListener('click', (e) => {
          const padre = cover.parentElement;
          if(padre !=null) this.showFicha(padre);
        });
      });


      if (iconos.length != 0) this.onoff = false;
    }
  }


  showFicha(padre: Element){
    if(padre.classList.contains('active')){
      padre.classList.remove('active');
      padre.querySelector('.icon')!.innerHTML = 'expand_more';
      padre.querySelector('.block__cover')?.classList.remove('imgActive')
    }else{
      padre.classList.add('active');
      padre.querySelector('.icon')!.innerHTML = 'expand_less';
      padre.querySelector('.block__cover')?.classList.add('imgActive')
    }
  }

}
