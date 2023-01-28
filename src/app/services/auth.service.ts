import { HttpClient , HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/auth_model';
import { Observable } from 'rxjs/internal/Observable';
import { VillageModel } from '../models/village_model';
import { Reposity } from '../repository/repository';
import { UserModel } from '../models/user_model';
import { ProvinceModel } from '../models/province_model';
import { DistrictModel } from '../models/district_model';
import { MassModel } from '../models/mass_model';
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
  public getProvince(): Observable<ProvinceModel[]> {
    return this.http.get<ProvinceModel[]>(`${Reposity.apiUrl}/Address/provinces`);
  }
  public getDistrict(id:number): Observable<DistrictModel[]> {
    return this.http.get<DistrictModel[]>(`${Reposity.apiUrl}/Address/districts/${id}`);
  }
  public getVillage(id:number): Observable<VillageModel[]> {
    return this.http.get<VillageModel[]>(`${Reposity.apiUrl}/Address/villages/${id}`);
  }
   public getMassPosition(): Observable<MassModel[]> {
    return this.http.get<MassModel[]>(`${Reposity.apiUrl}/Address/masspositions`);
  }
  public getUser(): Observable<any> {
    return this.http.get<any>(`${Reposity.apiUrl}/${this.url}/User`);
  }
  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${Reposity.apiUrl}/${this.url}/GetAllUser`);
  }
  public Update(id:any,data: FormData): Observable<Response[]> {
    return this.http.put<Response[]>(
      `${Reposity.apiUrl}/${this.url}/UpdateUser/${id}`,
       data,
       {
        reportProgress: true,
        responseType: 'json',
      }
    );
  }
  // public Create(data: FormData): Observable<UserModel[]> {
  //   return this.http.post<UserModel[]>(
  //     `${Reposity.apiUrl}/${this.url}/register-superadmin`,
  //     data,
  //     {
  //       reportProgress: true,
  //       responseType: 'json',
  //     }
  //   );
  // }
  //ໂຕໄດ້
  public Create(data: FormData): Observable<Response[]> {
    return this.http.post<Response[]>(
      `${Reposity.apiUrl}/${this.url}/register-superadmin`,
      data,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );
  }
  public Delete(id:string,data:UserModel): Observable<any> {
    return this.http.put<UserModel>(
      `${Reposity.apiUrl}/${this.url}/DeleteUser/${id}`,
      data
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
