import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/auth_model';
import { Observable } from 'rxjs/internal/Observable';
import { VillageModel } from '../models/village_model';
import { Reposity } from '../repository/repository';
import { UserModel } from '../models/user_model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'Authenticate';
  constructor(private http: HttpClient) { }
  public login(user: User): Observable<string> {
    return this.http.post(`${Reposity.apiUrl}/${this.url}/loginAdmin`, user, {
      responseType: 'text',
    });
  }
  public getVillage(): Observable<VillageModel[]> {
    return this.http.get<VillageModel[]>(`${Reposity.apiUrl}/Address/villages`);
  }
  public getUser(): Observable<UserModel> {
    return this.http.get<UserModel>(`${Reposity.apiUrl}/${this.url}/User`);
  }
  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${Reposity.apiUrl}/${this.url}/GetAllUser`);
  }
  public Update(id:Number,data: UserModel): Observable<any> {
    return this.http.put(
      `${Reposity.apiUrl}/${this.url}/${id}`,
       data
    );
  }

  public Create(data: UserModel): Observable<UserModel[]> {
    return this.http.post<UserModel[]>(
      `${Reposity.apiUrl}/${this.url}/register-superadmin`,
      data
    );
  }

  public Delete(id:any): Observable<UserModel> {
    return this.http.delete<UserModel>(
      `${Reposity.apiUrl}/${this.url}/${id}`
    );
  }
   //Helper Methods
   setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  postFile(caption: string, fileToUpload: File) {
    const endpoint = `${this.url}/UploadImage`;
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);
    return this.http
      .post(endpoint, formData);
  }
}
