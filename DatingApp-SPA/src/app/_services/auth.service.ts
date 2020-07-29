
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  usernamewelcome: any;
  currentUser: User;
  photoUrl = new BehaviorSubject<string>('../../assets/user.png');
  currentPhotoUrl = this.photoUrl.asObservable();


  constructor(private http: HttpClient) { }
  changeMemberPhoto(photoUrl: string) {
    this.photoUrl.next(photoUrl);
  }

login (model: any) {

  return this.http.post(this.baseUrl + 'login', model).pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('user', JSON.stringify(user.user));
        localStorage.setItem('usernamewelcome', model.username);
        this.usernamewelcome = model.username;
        localStorage.setItem('token', user.tokenString);
        this.currentUser = user.user;
        this.changeMemberPhoto(this.currentUser.photoUrl);
        this.decodedToken = this.jwtHelper.decodeToken(user.tokenString);
        console.log(this.decodedToken);
      }
    })
  );
}
    register(user: User) {
  return this.http.post(this.baseUrl + 'register', user);
    }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

// private requestOptions() {
//   const headers = new Headers({'Content-type': 'application/json'});
//   return new RequestOptions({headers: headers});
// }
}
