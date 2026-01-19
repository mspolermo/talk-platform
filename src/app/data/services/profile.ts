import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private http = inject(HttpClient);
  private baseApiUrl = 'https://icherniakov.ru/yt-course'

  getTestAccounts(): void {
    this.http.get(`${this.baseApiUrl}/account/test_accounts`);
  }
}
