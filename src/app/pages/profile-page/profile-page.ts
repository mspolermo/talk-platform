import { Component, inject } from '@angular/core';
import { ProfileHeader } from "../../common-ui/profile-header/profile-header";
import { ProfileService } from '../../data/services/profile';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  imports: [ProfileHeader],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
})
export class ProfilePage {
  profileService = inject(ProfileService)
  route = inject(ActivatedRoute)

  profile$ = this.route.params.pipe(
    switchMap()
  )
}
