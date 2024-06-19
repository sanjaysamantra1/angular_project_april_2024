import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UsersService } from './services/users.service';

export const userdetailsResolver: ResolveFn<Object> = (route, state) => {
  const id = +route.params['id'];
  const userService = inject(UsersService)
  return userService.fetchUserDataById(id);
};
