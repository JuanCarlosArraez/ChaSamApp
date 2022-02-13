import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'listening',
    loadChildren: () => import('./modules/listening/listening.module').then((m) => m.ListeningModule),
  },
  {
    path: 'autocomplete',
    loadChildren: () => import('./modules/search/autocomplete.module').then( m => m.AutocompletePageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./modules/details/description.module').then( m => m.DescriptionPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./shared/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
