import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NgxPaginationModule } from 'ngx-pagination';

export const appConfig: any = {
  imports: [NgxPaginationModule],
  providers: [provideRouter(routes)],
};
