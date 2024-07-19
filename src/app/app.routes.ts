import { Routes } from '@angular/router';
import { FilterViewComponent } from './components/filter-view/filter-view.component';
import { movieDetailsResolver } from './components/movie-details/resolver/movie-details.resolver';

export const routes: Routes = [
  { path: '', component: FilterViewComponent },
  { path:'details/:id', loadComponent: () => import('./components/movie-details/movie-details.component').then(m => m.MovieDetailsComponent),
    resolve: {movieDetails: movieDetailsResolver}
  },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];
