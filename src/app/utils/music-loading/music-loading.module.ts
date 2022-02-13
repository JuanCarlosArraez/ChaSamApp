import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MusicLoadingComponent } from './music-loading.';

@NgModule({
  declarations: [MusicLoadingComponent],
  imports: [CommonModule],
  exports: [MusicLoadingComponent],
})
export class MusicLoadingModule {}