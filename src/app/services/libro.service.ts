import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Libro } from '../models/libro';
import { Global } from "./global";

@Injectable()
export class LibroService{
    public url:string;

    constructor(
        private _http :HttpClient
        ){
        this.url = Global.url;
        console.log(this.url + "------------------------------------------");

    }

    listadoLibros():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'books',{headers: headers});
    }

    saveLibro(libro: Libro){
        let params = JSON.stringify(libro);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.post(this.url + 'saveLibro', params, {headers: headers});
    }
}