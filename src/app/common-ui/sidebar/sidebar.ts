import { Component } from '@angular/core';
import { SvgIcon } from '../svg-icon/svg-icon'
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIcon, NgForOf],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems = [
    { label: 'Моя страница', icon: 'home', link: ''},
    { label: 'Чаты', icon: 'chats', link: 'chats'},
    { label: 'Поиск', icon: 'search', link: 'search'}
  ]
}
