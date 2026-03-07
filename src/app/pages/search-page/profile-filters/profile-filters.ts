import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, last, switchMap } from 'rxjs';
import { ProfileService } from '../../../data/services/profile';

@Component({
  selector: 'app-profile-filters',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-filters.html',
  styleUrl: './profile-filters.scss',
})
export class ProfileFilters {
  fb = inject(FormBuilder)
  profileService = inject(ProfileService)

  searchForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    stack: [''],
  })

  constructor() {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(300),
        switchMap(formValue => {
          return this.profileService.filterProfiles(formValue)
      }))
      .subscribe()
  }
}
