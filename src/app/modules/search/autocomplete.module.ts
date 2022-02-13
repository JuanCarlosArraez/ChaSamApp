import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AutocompletePageRoutingModule } from './autocomplete-routing.module';

import { AutocompletePage } from './autocomplete.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    AutocompletePageRoutingModule
  ],
  declarations: [AutocompletePage]
})
export class AutocompletePageModule {}
