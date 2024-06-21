import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { myGuard1Guard } from './my-guard1.guard';

describe('myGuard1Guard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myGuard1Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
