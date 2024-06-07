import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('I am loading iNterceptor')
  const loadingService = inject(LoadingService)
  loadingService.showLoader();

  return next(req).pipe(finalize(() => { loadingService.hideLoader() }))
};
