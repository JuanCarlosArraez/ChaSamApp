import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer.page';
import { RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  declarations: [FooterComponent],
  exports:[FooterComponent]
})
export class FooterModule {}