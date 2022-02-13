import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer',
  template: `
  <ion-footer class="ion-no-border" style="position: absolute; bottom: 0%;" collapse="fade">
<ion-buttons  color="traslucent" style="justify-content: center;">
  <ion-button [routerLink]="route">
    
    <ion-text color="light">
    <ion-icon name="chevron-back-outline"></ion-icon>
      Creado por Juan Carlos Arráez.
      <ion-icon name="chevron-forward-outline"></ion-icon>
    </ion-text> 
  </ion-button>
</ion-buttons>
</ion-footer>`,
})
export class FooterComponent {
    @Input() public route: string ='';
}