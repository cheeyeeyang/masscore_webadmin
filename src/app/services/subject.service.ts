import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectModel } from '../models/subject_model';
import { Reposity } from '../repository/repository';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private url = 'Subject';
  constructor(private http:HttpClient) { }
  public Select(): Observable<SubjectModel[]> {
    return this.http.get<SubjectModel[]>(`${Reposity.apiUrl}/${this.url}`);
  }
  public Update(id:Number,data: SubjectModel): Observable<SubjectModel[]> {
    return this.http.put<SubjectModel[]>(
      `${Reposity.apiUrl}/${this.url}/${id}`,
       data
    );
  }
  public Create(data: SubjectModel): Observable<SubjectModel[]> {
    return this.http.post<SubjectModel[]>(
      `${Reposity.apiUrl}/${this.url}`,
      data
    );
  }
  public Delete(id:any): Observable<SubjectModel[]> {
    return this.http.delete<SubjectModel[]>(
      `${Reposity.apiUrl}/${this.url}/${id}`
    );
  }
}
