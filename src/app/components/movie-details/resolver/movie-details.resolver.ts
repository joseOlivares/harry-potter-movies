import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { MovieService } from '../../../services/movie.service';
import { MovieDetails } from '../../../types/types';

export const movieDetailsResolver: ResolveFn<MovieDetails> = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const id=route.paramMap.get("id") ?? "";
  //console.log("entra al resolver con id= "+id)
  return inject(MovieService).getMovieDetails(id);
};
