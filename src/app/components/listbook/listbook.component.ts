import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService} from 'src/app/services/libro.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css'],
  providers: [LibroService]
})
export class ListbookComponent implements OnInit {

  constructor(
    private _libroService: LibroService
  ) { 
    
  }

  ngOnInit(): void {
  }

}
