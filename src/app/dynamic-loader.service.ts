import { Injectable } from '@angular/core';

import { HeroComponent } from './hero/hero.component';
import { ProfileComponent } from './profile/profile.component';
import { DynamicLoaderItem } from './dynamic-loader/dynamic-loader-item.component';

@Injectable()
export class DynamicLoaderService {
  getComponents() {
    return [
      new DynamicLoaderItem(HeroComponent, {
        componentIdentifyer: 'Hero',
        name: 'Bombasto',
        bio: 'Brave as they come',
      }),
      new DynamicLoaderItem(ProfileComponent, {
        componentIdentifyer: 'Profile',
        name: 'Dr. IQ',
        bio: 'Smart as they come',
      }),
    ];
  }
}
