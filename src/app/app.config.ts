import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgxPaginationModule } from 'ngx-pagination';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { logInterceptor } from './interceptors/log.interceptor';
import { retryInterceptor } from './interceptors/retry.interceptor';
import { tokenInterceptor } from './interceptors/token.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';
import { myresponseInterceptor } from './interceptors/myresponse.interceptor';

export const appConfig: any = {
  imports: [NgxPaginationModule],
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([
      logInterceptor,
      retryInterceptor,
      tokenInterceptor,
      loadingInterceptor,
      errorInterceptor,
      myresponseInterceptor
    ]))
  ],
};
