import { Component, inject } from '@angular/core';
import { SvgIcon } from '../svg-icon/svg-icon'
import { AsyncPipe, NgForOf } from '@angular/common';
import { SubscriberCard } from "./subscriber-card/subscriber-card";
import { RouterLink } from "@angular/router";
import { ProfileService } from '../../data/services/profile';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIcon, NgForOf, SubscriberCard, RouterLink, AsyncPipe],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  profileService = inject(ProfileService)
  subscribers$ = this.profileService.getSubscribersShortList()

  menuItems = [
    { label: 'Моя страница', icon: 'home', link: ''},
    { label: 'Чаты', icon: 'chats', link: 'chats'},
    { label: 'Поиск', icon: 'search', link: 'search'}
  ]
}
