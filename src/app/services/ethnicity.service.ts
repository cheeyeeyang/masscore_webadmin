import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EthnicityModel } from '../models/ethnicity_model';
import { Reposity } from '../repository/repository';

@Injectable({
  providedIn: 'root'
})
export class EthnicityService {
  private url = 'Ethnicity';
  constructor(private http:HttpClient) { }
  public Select(): Observable<EthnicityModel[]> {
    return this.http.get<EthnicityModel[]>(`${Reposity.apiUrl}/${this.url}`);
  }
  public Update(id:Number,data: EthnicityModel): Observable<any> {
    return this.http.put(
      `${Reposity.apiUrl}/${this.url}/${id}`,
       data
    );
  }

  public Create(data: EthnicityModel): Observable<EthnicityModel[]> {
    return this.http.post<EthnicityModel[]>(
      `${Reposity.apiUrl}/${this.url}`,
      data
    );
  }

  public Delete(id:any): Observable<EthnicityModel> {
    return this.http.delete<EthnicityModel>(
      `${Reposity.apiUrl}/${this.url}/${id}`
    );
  }
}
