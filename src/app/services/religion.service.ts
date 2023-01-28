import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReligionModel } from '../models/religion_model';
import { Reposity } from '../repository/repository';

@Injectable({
  providedIn: 'root'
})
export class ReligionService {
  private url = 'Religion';
  constructor(private http:HttpClient) { }
  public Select(): Observable<ReligionModel[]> {
    return this.http.get<ReligionModel[]>(`${Reposity.apiUrl}/${this.url}`);
  }
  public Update(id:Number,data: ReligionModel): Observable<ReligionModel[]> {
    return this.http.put<ReligionModel[]>(
      `${Reposity.apiUrl}/${this.url}/${id}`,
       data
    );
  }

  public Create(data: ReligionModel): Observable<ReligionModel[]> {
    return this.http.post<ReligionModel[]>(
      `${Reposity.apiUrl}/${this.url}`,
      data
    );
  }

  public Delete(id:any): Observable<ReligionModel[]> {
    return this.http.delete<ReligionModel[]>(
      `${Reposity.apiUrl}/${this.url}/${id}`
    );
  }
}
