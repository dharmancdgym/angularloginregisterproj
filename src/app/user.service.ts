import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost:3000/users';  // URL to the backend server

  constructor(private http: HttpClient) {}

  getUsers(): Observable<{ username: string, password: string }[]> {
    return this.http.get<{ username: string, password: string }[]>(this.usersUrl);
  }

  validate(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.getUsers().subscribe(users => {
        const user = users.find(user => user.username === username && user.password === password);
        observer.next(!!user);
        observer.complete();
      }, error => {
        observer.next(false);
        observer.complete();
      });
    });
  }

  register(username: string, password: string): Observable<void> {
    const newUser = { username, password };
    return this.http.post<void>(this.usersUrl, newUser);
  }
}