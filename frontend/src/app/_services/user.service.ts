import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl+'/user');
  }

  getUser() {
    return this.http.get(this.baseUrl+'/user/'+'Username');
  }

  addUser() {
    const headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
 
    return this.http.post(this.baseUrl+'/user/add',{ name: "Username", age: 25 }, {headers: headers})
  }

  updateUser() {
    const headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8');
 
    return this.http.put(this.baseUrl+'/user/update',{ name: "Username", age: 26 }, {headers: headers})
  }

  deleteUser() {
 
    return this.http.delete(this.baseUrl+'/user/delete/' + 'Username')
  }
}
