import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgxPaginationModule } from 'ngx-pagination';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: any = {
  imports: [NgxPaginationModule],
  providers: [provideRouter(routes), provideHttpClient()],
};
