import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgxPaginationModule } from 'ngx-pagination';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { logInterceptor } from './interceptors/log.interceptor';
import { retryInterceptor } from './interceptors/retry.interceptor';

export const appConfig: any = {
  imports: [NgxPaginationModule],
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([logInterceptor, retryInterceptor]))
  ],
};
