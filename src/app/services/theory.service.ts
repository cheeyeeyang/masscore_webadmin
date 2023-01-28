import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TheoryModel } from '../models/theory_model';
import { Reposity } from '../repository/repository';

@Injectable({
  providedIn: 'root'
})
export class TheoryService {
  private url = 'Theory';
  constructor(private http:HttpClient) { }
  public Select(): Observable<TheoryModel[]> {
    return this.http.get<TheoryModel[]>(`${Reposity.apiUrl}/${this.url}`);
  }
  public Update(id:Number,data: TheoryModel): Observable<TheoryModel[]> {
    return this.http.put<TheoryModel[]>(
      `${Reposity.apiUrl}/${this.url}/${id}`,
       data
    );
  }
  public Create(data: TheoryModel): Observable<TheoryModel[]> {
    return this.http.post<TheoryModel[]>(
      `${Reposity.apiUrl}/${this.url}`,
      data
    );
  }
  public Delete(id:any): Observable<TheoryModel[]> {
    return this.http.delete<TheoryModel[]>(
      `${Reposity.apiUrl}/${this.url}/${id}`
    );
  }
}
