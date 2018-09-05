import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetService {
 

  constructor(private http:HttpClient) { }
  getMovies():Observable<any>{
    return this.http.get("http://localhost:8098/api/v1/movies");
  }
 
}
