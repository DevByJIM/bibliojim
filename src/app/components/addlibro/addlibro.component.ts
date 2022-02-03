import { Component, OnInit } from '@angular/core';
import { LibroService} from './../../services/libro.service';

@Component({
  selector: 'app-addlibro',
  templateUrl: './addlibro.component.html',
  styleUrls: ['./addlibro.component.css']
})
export class AddlibroComponent implements OnInit {

  constructor( libroService: LibroService) { 
    
  }

  ngOnInit(): void {
  }

}
