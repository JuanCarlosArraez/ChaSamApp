import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading',
  template: ` 
    <div
      class="ion-text-center"
      style="position:relative; margin-top:200px; margin-left:5%;"
      *ngIf="loading || loadingSearch"
    >
   <svg  width="100px" height="100px" viewBox="0 0 100 100">
    <rect y="25" width="10" height="50" rx="4" ry="4" fill="#424242">
      <animate attributeName="x" values="10;100" dur="1.2s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="rotate" from="0 10 70" to="-60 100 70" dur="1.2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite"/>
    </rect>
    <rect y="25" width="10" height="50" rx="4" ry="4" fill="#424242">
      <animate attributeName="x" values="10;100" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="rotate" from="0 10 70" to="-60 100 70" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
     <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
    </rect>
    <rect y="25" width="10" height="50" rx="4" ry="4" fill="#424242">
      <animate attributeName="x" values="10;100" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
      <animateTransform attributeName="transform" type="rotate" from="0 10 70" to="-60 100 70" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
    </rect>
  </svg>
  </div>
  `,
})
export class SpinnerLoadingComponent {
@Input() loading: boolean;
@Input() loadingSearch: boolean;
}