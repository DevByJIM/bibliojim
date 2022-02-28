import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.css']
})
export class AcordionComponent implements OnInit {

  @Input() book!: Book;
  public urlcover: String = Global.urlCover;

  constructor() {

  }

  ngOnInit(): void {
    
  }

  }
