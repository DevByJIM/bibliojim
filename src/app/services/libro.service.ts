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
    }

    testService(){
        return 'Probando el servicio ByJIM';
    }
}