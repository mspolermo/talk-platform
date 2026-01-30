import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient)
  private baseApiUrl = 'https://icherniakov.ru/yt-course/auth'

  login (payload: {username: string, password: string}) {
    console.log('login', payload);
    return this.http.post(`${this.baseApiUrl}/token`, payload).subscribe()
  }
}
