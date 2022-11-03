import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpclient:HttpClient) { }
  login(data:any):Observable<any>{
    return this._httpclient.post("", data)
  }
}
