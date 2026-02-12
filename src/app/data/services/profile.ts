import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../interfaces/profile.interface';
import { Pageble } from '../interfaces/pageble.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private http = inject(HttpClient);
  private baseApiUrl = 'https://icherniakov.ru/yt-course'

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}/account/test_accounts`);
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}/account/me`);
  }

  getSubscribersShortList () {
    return this.http.get<Pageble<Profile>>(
      `${this.baseApiUrl}/account/subscribers/`,
      {
        params: {
          page: 1,
          size: 50
        }
      }
    ).pipe(
      map(res => res.items.slice(0, 3))
    )
  }
}
