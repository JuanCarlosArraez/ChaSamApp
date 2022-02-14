import { Component } from '@angular/core';

@Component({
  selector: 'music-loading',
  template: `
    <div
      class="ion-text-center"
      style="position: relative; top:80%"
    >
    <svg width="50px"  height="50px" viewBox="0 0 51 50">

<rect y="0" width="10" height="50"  fill="#ffffff" rx="5px" ry="5px" stroke-linejoin="round">
    <animate attributeName="height" values="50;10;50" begin="0s" dur="1s" repeatCount="indefinite" />
    <animate attributeName="y" values="0;20;0" begin="0s" dur="1s" repeatCount="indefinite" />
</rect>

<rect x="19" y="0" width="10" height="50" fill="#ffffff" rx="5px" ry="5px" stroke-linejoin="round">
    <animate attributeName="height" values="50;10;50" begin="0.2s" dur="1s" repeatCount="indefinite" />
    <animate attributeName="y" values="0;20;0" begin="0.2s" dur="1s" repeatCount="indefinite" />
</rect>

<rect x="38" y="0" width="10" height="50" fill="#ffffff" rx="5px" ry="5px" stroke-linejoin="round">
    <animate attributeName="height" values="50;10;50" begin="0.4s" dur="1s" repeatCount="indefinite" />
    <animate attributeName="y" values="0;20;0" begin="0.4s" dur="1s" repeatCount="indefinite" />
</rect>

</svg>
    </div>

  `,
})
export class MusicLoadingComponent {

}