import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { Book } from 'src/app/models/book';
import { LibroService } from './../../services/libro.service';
import { BookService } from './../../services/book.service';
import { Global } from 'src/app/services/global';
import { EMPTY } from 'rxjs';


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
    // this.cargarAcordeonLibros(); 

    this.cargarEventAcordion();

  }

  ngOnInit(): void {
    // this.cargarLibros();
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
        console.log(this.books);
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
      const iconos = document.querySelectorAll('.icon--right');
      const covers = document.querySelectorAll('.block__cover');


      iconos.forEach((icon, i) => {
        icon.addEventListener('click', (e) => {
          this.mostrarFicha(icon);
        });
      });

      covers.forEach((cover, i) => {
        cover.addEventListener('click', (e) => {
          this.mostrarFicha(cover);
        });
      });


      if (iconos.length != 0) this.onoff = false;
    }
  }



  mostrarFicha(icon: Element): void {
    const iconos = document.querySelectorAll('.icon--right');
    const covers = document.querySelectorAll('.block__cover');
    const blocks = document.querySelectorAll('.block');

    let portada = icon.parentElement?.childNodes[0] as HTMLElement;

    if (icon.innerHTML == 'expand_more' || !portada.classList.contains('imgActive')) {

      blocks.forEach((block, i) => {
        block.classList.remove('active')
      });
      iconos.forEach((icn, i) => {
        icn.innerHTML = 'expand_more';
      });
      covers.forEach((cover, i) => {
        cover.classList.remove('imgActive')
      });

      if (icon.parentElement != null) icon.parentElement.classList.add('active')
      icon.innerHTML = 'expand_less';
      portada?.classList.add('imgActive');

    } else {
      icon?.parentElement?.classList.remove('active');
      icon.innerHTML = 'expand_more';
      portada?.classList.remove('imgActive');
    }
  }



  cargarAcordeonLibros(): void {
    const block = document.querySelectorAll('.block')
    const block_header = document.querySelectorAll('.block__header');

    const cover1 = document.querySelectorAll('.portada');

    block_header.forEach((obj, i) => {
      const icn = obj.querySelector('.icon');
      const cover = obj.querySelector('img');

      cover?.setAttribute('src', Global.urlCover + this.books[i].myb_cover)
      cover1[i]?.setAttribute('src', Global.urlCover + this.books[i].myb_cover)


      block_header[i].addEventListener('click', () => {

        block.forEach((content, i) => {

          if (block[i].firstChild != content) {
            block[i].classList.remove('activo');
            const icns = block[i].querySelector('.icon');
            if (icns != null) icns.textContent = 'expand_more';
          }
        })
        block[i].classList.add('activo');
        if (icn != null) icn.textContent = 'expand_less';
      })
    });

  }

}
