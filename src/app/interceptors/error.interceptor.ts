import { HttpInterceptorFn } from '@angular/common/http';
import { EMPTY, catchError } from 'rxjs';
import Snackbar from 'awesome-snackbar'

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('I am error Intyerceptor')
  return next(req).pipe(catchError((error) => {
    console.log('This logic gets invoked post request')
    new Snackbar(error.message);
    return EMPTY;
  }));
};
