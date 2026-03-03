import { Component } from '@angular/core';
import { SvgIcon } from "../../../common-ui/svg-icon/svg-icon";

@Component({
  selector: 'app-avatar-upload',
  imports: [SvgIcon],
  templateUrl: './avatar-upload.html',
  styleUrl: './avatar-upload.scss',
})
export class AvatarUpload {
  fileBrowserHandler(event: Event) {
    const files = (event.target as HTMLInputElement)?.files as FileList
  }
}
