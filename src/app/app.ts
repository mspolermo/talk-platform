import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './common-ui/profile-card/profile-card';
import { ProfileService } from './data/services/profile';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('talk-platform');
  protected profileService = inject(ProfileService);

  protected profiles = signal<any>([]);

  constructor() {
    this.profileService.getTestAccounts().subscribe((res) => {
      this.profiles.set(res);
    }
    );
  }

}
