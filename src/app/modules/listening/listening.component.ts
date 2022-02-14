import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listening',
  templateUrl: './listening.component.html',
  styleUrls: ['./listening.component.scss'],
})
export class ListeningComponent implements OnInit {

  public routeHome: string ='../home';

  constructor() { }

  ngOnInit():void {}

}