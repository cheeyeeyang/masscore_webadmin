import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PartyPositionModel } from '../models/party_position_model';
import { Reposity } from '../repository/repository';

@Injectable({
  providedIn: 'root'
})
export class PartypositionService {
  private url = 'PartyPosition';
  constructor(private http:HttpClient) { }
  public Select(): Observable<PartyPositionModel[]> {
    return this.http.get<PartyPositionModel[]>(`${Reposity.apiUrl}/${this.url}`);
  }
  public Update(id:Number,data: PartyPositionModel): Observable<PartyPositionModel[]> {
    return this.http.put<PartyPositionModel[]>(
      `${Reposity.apiUrl}/${this.url}/${id}`,
       data
    );
  }

  public Create(data: PartyPositionModel): Observable<PartyPositionModel[]> {
    return this.http.post<PartyPositionModel[]>(
      `${Reposity.apiUrl}/${this.url}`,
      data
    );
  }

  public Delete(id:any): Observable<PartyPositionModel[]> {
    return this.http.delete<PartyPositionModel[]>(
      `${Reposity.apiUrl}/${this.url}/${id}`
    );
  }
}
