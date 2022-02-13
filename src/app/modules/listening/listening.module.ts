import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListeningComponent } from './listening.component';
import { RouterModule} from '@angular/router';
import { ListeningRoutingModule } from './listening-routing.module';
import { MusicLoadingModule } from 'src/app/utils/music-loading/music-loading.module';
import { FooterModule } from '@components/footer/footer.module';

@NgModule({
    imports: [
      CommonModule,
      IonicModule,
      RouterModule,
      ListeningRoutingModule,
      MusicLoadingModule,
      FooterModule
    ],
    declarations: [ListeningComponent],
    exports:[ListeningComponent]
  })
  export class ListeningModule {}