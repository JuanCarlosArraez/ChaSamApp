import { Component, ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import {IonSlides} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,) {}
  @ViewChild(IonSlides) slides: IonSlides;

  slideOpts = {
    initialSlide: 1,
  };

 public onNextSlide(e) {
      this.slides?.slideTo(e)
  }

  public openListening(url:string){
    this.router.navigateByUrl('/'+url);
  }
}
