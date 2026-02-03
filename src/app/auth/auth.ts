import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient)
  private baseApiUrl = 'https://icherniakov.ru/yt-course/auth'

  login (payload: {username: string, password: string}) {
    const formData = new FormData();

    formData.append('username', payload.username)
    formData.append('password', payload.password)

    return this.http.post(`${this.baseApiUrl}/token`, formData).subscribe()
  }
}
