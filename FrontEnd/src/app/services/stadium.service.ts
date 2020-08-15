import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Stadium, StadiumSuccessCreate} from '../models/stadium';
@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  private url = "http://localhost:3000/stadium";
  constructor(private http:HttpClient) { }

  postStadium(stadium:Stadium)
  {
    return this.http.post<StadiumSuccessCreate>(`${this.url}/create`,stadium);
  }

  getAllStadium()
  {
    return this.http.get<Stadium[]>(this.url);
  }
}
