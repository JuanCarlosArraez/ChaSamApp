import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AutocompletePageRoutingModule } from './autocomplete-routing.module';

import { AutocompletePage } from './autocomplete.page';
import { SpinnerLoadingModule } from '../../utils/spinner-loading/spinner-loading.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    SpinnerLoadingModule,
    AutocompletePageRoutingModule
  ],
  declarations: [AutocompletePage]
})
export class AutocompletePageModule {}
