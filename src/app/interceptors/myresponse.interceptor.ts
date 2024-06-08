import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';
export const myresponseInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Pre interceptor');
  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && event.status === 200) {
        console.info('Post Interceptor - Sucess');
      }
    })
  );
};
