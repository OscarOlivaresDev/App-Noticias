import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http : HttpClient) { }

  getNoticias(parametros:any):Observable<any>{
    const urlApi = `https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categoria}&apiKey=65bc82c66c594da988569d981728beae`;

    return this.http.get(urlApi);
  }
}
