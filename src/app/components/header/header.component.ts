import { Component, Output,  EventEmitter, } from '@angular/core';

@Component({
  selector: 'header-intro',
  template: `
  <ion-header  class="ion-no-border">
  <ion-toolbar color="translucent">
    
  <ion-buttons slot="start">
      <ion-button  class="buttons-intro-header"  (click)="prev(0)">
      <ion-icon  color="light" class="icon-person" name="person"></ion-icon>
      <ion-text  color="light" [ngStyle]="{'margin-top': '70px'}"> <strong>{{library}} </strong></ion-text>
      </ion-button>
    </ion-buttons>

  <ion-buttons slot="end" class="button-trends ion-text-center">
    <ion-button class="buttons-intro-header" (click)="onNext(2)">
    <ion-icon color="light" class="icon-trends" name="trending-up"></ion-icon>
    <ion-text color="light" [ngStyle]="{'margin-top': '70px'}"><strong> {{bookshop}} </strong></ion-text>
    </ion-button>
  </ion-buttons>

</ion-toolbar>
</ion-header>`,
})
export class HeaderComponent {
  @Output() public libraryRoute= new EventEmitter<number>();

  public library: string = 'Biblioteca';
  public bookshop: string= 'Listas';

  public onNext(event) {
    this.libraryRoute.emit(event);
  }
  public prev(event) {
    this.libraryRoute.emit(event);
  }
}