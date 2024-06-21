import { CanActivateChildFn } from '@angular/router';

export const myGuard1Guard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
