import { Component, inject } from '@angular/core';
import { AsyncPipe } from "@angular/common";
import { ProfileHeader } from "../../common-ui/profile-header/profile-header";
import { ProfileService } from '../../data/services/profile';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { SvgIcon } from "../../common-ui/svg-icon/svg-icon";
import { ImgUrlPipe } from "../../helpers/pipes/img-url-pipe";

@Component({
  selector: 'app-profile-page',
  imports: [AsyncPipe, ProfileHeader, SvgIcon, RouterLink, ImgUrlPipe],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
})
export class ProfilePage {
  profileService = inject(ProfileService)
  route = inject(ActivatedRoute)

  me$ = toObservable(this.profileService.me)
  subscribers$ = this.profileService.getSubscribersShortList(5)

  profile$ = this.route.params.pipe(
    switchMap(({ id }) => {
      if (id === 'me') return this.me$

      return this.profileService.getAccount(id)
    })
  )
}
