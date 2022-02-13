import { Component, OnInit, ViewChild } from '@angular/core';
import { AutocompleteService } from '@services/autocomplete.service';
import { SearchType, Terms } from '@interfaces/search.interface';
import { ModalController, IonSearchbar} from '@ionic/angular';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.page.html',
  styleUrls: ['./autocomplete.page.scss'],
})
export class AutocompletePage implements OnInit {

  @ViewChild('searchbar', {static: false}) searchbar:IonSearchbar;

  results: Observable<any>;
  searchTerm = Terms?.term;
  type: SearchType = SearchType?.locale;

  itemArray: any=[];
  itemSubscribe: any;


  constructor(private autocomplete: AutocompleteService,
    private modalController: ModalController,) { }

  ngOnInit():void {
/*     this.results = this.autocomplete.searchData(this.searchTerm, this.type)
    this.itemSubscribe = this.results.subscribe(res => {
      this.itemArray = res;
      }); */
  }

  async close(){
    await this.modalController.dismiss();
  }

  searchChanged(event?: Partial<HTMLTextAreaElement>) {
    const target = event as HTMLTextAreaElement;
    this.results = this.autocomplete?.searchData(target?.value, this.type)
    .pipe(distinctUntilChanged(), debounceTime(5000));
  }
}
