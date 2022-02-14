import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AutocompleteService } from '@services/autocomplete.service';
import { SearchType, Terms } from '@interfaces/search.interface';
import { ModalController, IonSearchbar } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

const TITLE: string = 'Songs';
const PLACEHOLDER: string = 'Busca Canciones, artistas y letras';
const NORESULTS: string = 'Busca Canciones, artistas y letras que te interesen';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.page.html',
  styleUrls: ['./autocomplete.page.scss'],
})
export class AutocompletePage implements OnInit, OnDestroy {
  @ViewChild('searchbar', { static: false }) searchbar: IonSearchbar;

  public results: Observable<any>;
  public loadingSubscribe: Subscription;
  public loadingSearchSubscribe: Subscription;

  private type: SearchType = SearchType?.locale;
  private searchTerm = Terms?.term;
  public itemArray: any[];

  public isLoading: boolean;
  public isLoadingSearch: boolean;
  public isNoResults: boolean = false;

  public title: string = TITLE;
  public placeholder: string = PLACEHOLDER;
  public noResult: string = NORESULTS;
 
  constructor(
    private autocomplete: AutocompleteService,
    private modalController: ModalController
  ) {}

  ngOnInit(): void {
    this.isLoading = false;
    this.isLoadingSearch = true;
    this.subscribeLoadingUpdate();
  }

  private subscribeLoadingUpdate(): void {
    this.results = this.autocomplete.searchData(this.searchTerm, this.type);
    this.loadingSubscribe = this.results?.subscribe((res) => {
      this.isLoading = res;
      this.itemArray = res;
    });
  }

  private searchLoadingSuscription(): void {
    this.isLoadingSearch = false;
    this.isLoading = true;
    this.isNoResults = false;
    this.loadingSearchSubscribe = this.results?.subscribe((res) => {
      this.isLoadingSearch = res;
    });
  }

  public searchChanged(event?: Partial<HTMLTextAreaElement>): void {
    const target = event as HTMLTextAreaElement;
    this.results = this.autocomplete
      ?.searchData(target?.value, this.type)
      .pipe(distinctUntilChanged(), debounceTime(5000));

    if (!target?.value) {
      this.isLoadingSearch = true;
      this.isNoResults = true;
    } else {
      this.searchLoadingSuscription();
    }
  }

  async close(): Promise<void> {
    await this.modalController.dismiss();
  }

  ngOnDestroy(): void {
    this.loadingSubscribe?.unsubscribe();
    this.loadingSearchSubscribe?.unsubscribe();
  }
}
