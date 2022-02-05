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
