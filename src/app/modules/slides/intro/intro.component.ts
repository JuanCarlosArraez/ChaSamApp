import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ModalController} from '@ionic/angular';
import { AutocompletePage } from '../../search/autocomplete.page';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {

  public logo: string = './assets/images/shazam-logo.png';
  public message: string = 'Pulsa para chasamear'

  constructor(private router: Router, private modalController: ModalController,) { }

  ngOnInit():void {}

 public openListening(url){
    this.router.navigateByUrl('/'+url);
  }

  async openSearchModal() {
    const modal = await this.modalController.create({
      component: AutocompletePage,
      componentProps: {
      }
    });
    return await modal.present();
  }

}
