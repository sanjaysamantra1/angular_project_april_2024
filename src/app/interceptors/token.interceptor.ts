import { HttpInterceptorFn } from '@angular/common/http';
import { UsersService } from '../services/users.service';
import { Inject, inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('I am token interceptor')
  // const myToken = localStorage.getItem('myToken');
  const myToken = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA';
  const isLoggedIn = true;

  if (isLoggedIn) {
    const updatedReq = req.clone({
      setHeaders: {
        'MyTestHeader': `Bearer ${myToken}`
      }
    });
    return next(updatedReq);
  } else {
    return next(req);
  }

};
