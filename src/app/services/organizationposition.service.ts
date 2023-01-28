import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizationPositionModel } from '../models/organizationposition_model';
import { Reposity } from '../repository/repository';

@Injectable({
  providedIn: 'root'
})
export class OrganizationpositionService {
  private url = 'OrganizationPosition';
  constructor(private http:HttpClient) { }
  public Select(): Observable<OrganizationPositionModel[]> {
    return this.http.get<OrganizationPositionModel[]>(`${Reposity.apiUrl}/${this.url}`);
  }
  public Update(id:Number,data: OrganizationPositionModel): Observable<OrganizationPositionModel[]> {
    return this.http.put<OrganizationPositionModel[]>(
      `${Reposity.apiUrl}/${this.url}/${id}`,
       data
    );
  }

  public Create(data: OrganizationPositionModel): Observable<OrganizationPositionModel[]> {
    return this.http.post<OrganizationPositionModel[]>(
      `${Reposity.apiUrl}/${this.url}`,
      data
    );
  }

  public Delete(id:any): Observable<OrganizationPositionModel[]> {
    return this.http.delete<OrganizationPositionModel[]>(
      `${Reposity.apiUrl}/${this.url}/${id}`
    );
  }
}
