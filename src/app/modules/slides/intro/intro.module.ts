import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IntroComponent } from './intro.component';
import { RouterModule} from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  declarations: [IntroComponent],
  exports:[IntroComponent]
})
export class IntroModule {}