import { Component } from '@angular/core';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private statusBar: StatusBar)
  {this.statusBar.overlaysWebView(true); this.statusBar.backgroundColorByHexString('#0091d4ad');
}

}