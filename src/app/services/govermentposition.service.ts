import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GovermentPositionModel } from '../models/govermentposition_model';
import { Reposity } from '../repository/repository';

@Injectable({
  providedIn: 'root'
})
export class GovermentpositionService {
  private url = 'GovermentPosition';
  constructor(private http:HttpClient) { }
  public Select(): Observable<GovermentPositionModel[]> {
    return this.http.get<GovermentPositionModel[]>(`${Reposity.apiUrl}/${this.url}`);
  }
  public Update(id:Number,data: GovermentPositionModel): Observable<GovermentPositionModel[]> {
    return this.http.put<GovermentPositionModel[]>(
      `${Reposity.apiUrl}/${this.url}/${id}`,
       data
    );
  }

  public Create(data: GovermentPositionModel): Observable<GovermentPositionModel[]> {
    return this.http.post<GovermentPositionModel[]>(
      `${Reposity.apiUrl}/${this.url}`,
      data
    );
  }

  public Delete(id:any): Observable<GovermentPositionModel[]> {
    return this.http.delete<GovermentPositionModel[]>(
      `${Reposity.apiUrl}/${this.url}/${id}`
    );
  }
}
