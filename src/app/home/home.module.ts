import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IntroModule } from '@slides/intro/intro.module';
import { HeaderIntroModule } from '@components/header/header.module';
import { RouterModule} from '@angular/router';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderIntroModule,
    IntroModule,
    RouterModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
