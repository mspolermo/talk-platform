import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      [attr.fill]="color"
      aria-hidden="true"
    >
      <use [attr.href]="href"></use>
    </svg>
  `
})
export class SvgIcon {

  @Input({ required: true }) icon!: string;
  @Input() size: number = 16;
  @Input() color: string = 'currentColor';

  get href(): string {
    return `/assets/svg/${this.icon}.svg#${this.icon}`;
  }
}
