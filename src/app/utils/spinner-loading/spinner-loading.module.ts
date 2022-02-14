import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerLoadingComponent } from './spinner-loading';

@NgModule({
  declarations: [SpinnerLoadingComponent],
  imports: [CommonModule],
  exports: [SpinnerLoadingComponent],
})
export class SpinnerLoadingModule {}