import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/auth_model';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { 
  }
  public register(user: User): Observable<any> {
    return this.http.post<any>(
      'https://localhost:7047/api/Authenticate',
      user
    );
  }

  public login(user: User): Observable<string> {
    return this.http.post('https://localhost:7047/api/Authenticate/loginAdmin', user, {
      responseType: 'text',
    });
  }

  public getUser(): Observable<string> {
    return this.http.get('https://localhost:7047/api/Authenticate/User', {
      responseType: 'text',
    });
  }
}
