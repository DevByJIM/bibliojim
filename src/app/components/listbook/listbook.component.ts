import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, AfterViewChecked  } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from './../../services/libro.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit,AfterViewChecked {

  public libros: Libro[] = [];

  
  
  
  constructor(private _libroService: LibroService) {
    
  }
  ngAfterViewChecked(): void {
    this.cargarAcordeon();
  }
  
  ngOnInit(): void {
    
    this.cargarDatos();
  }

  

  cargarDatos():void{
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


  }

  cargarAcordeon(): void{
    const bloque = document.querySelectorAll('.bloque')
    const bloque_header = document.querySelectorAll('.bloque__header');


    bloque_header.forEach( (obj, i) =>{     
      bloque_header[i].addEventListener('click',()=>{
          bloque.forEach((content, i)=>{
            bloque[i].classList.remove('activo');
          })
         bloque[i].classList.add('activo');
       })
    });

  }

}
