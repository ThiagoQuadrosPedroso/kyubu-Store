import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http:HttpClient) { }
  public salvar(dados:any):Observable<any>{
    return this.http.post(
      `http://localhost:3000/movimentacao/add`,
      {dados},{observe:'response'}) }
}
