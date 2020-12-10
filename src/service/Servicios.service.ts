import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./Global";

@Injectable()
export class ServiciosService {

    private url: string;

    constructor(private _http: HttpClient) {
        this.url = Global.urlLocal;
    }

    usuariosPrueba(): Observable<any> {
        var request = "usersprueba"
        return this._http.get(this.url + request);
    }

    usuarioConcreto(id): Observable<any> {
        return this._http.get(this.url + id)
    }
}