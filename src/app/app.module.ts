import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicLoader } from './dynamic-loader/dynamic-loader.component';
import { DynamicLoaderService } from './dynamic-loader.service';
import { HeroComponent } from './hero/hero.component';
import { ProfileComponent } from './profile/profile.component';
import { DynamicComponentDirective } from './dynamic-component.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    DynamicLoader,
    HeroComponent,
    ProfileComponent,
    DynamicComponentDirective,
  ],
  bootstrap: [AppComponent],
  providers: [DynamicLoaderService],
})
export class AppModule {}
