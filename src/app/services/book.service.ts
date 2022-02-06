import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Book } from '../models/book';
import { Global } from "./global";

@Injectable()
export class BookService{
    public url:string;

    constructor(
        private _http :HttpClient
        ){
        this.url = Global.url;
    }

    listadoBooks():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'books',{headers: headers});
    }

    saveLibro(book: Book){
        let params = JSON.stringify(book);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url + 'saveLibro', params, {headers: headers});
    }
}