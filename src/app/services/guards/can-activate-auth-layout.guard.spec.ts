import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateAuthLayoutGuard } from './can-activate-auth-layout.guard';

describe('CanActivateAuthLayoutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateAuthLayoutGuard]
    });
  });

  it('should ...', inject([CanActivateAuthLayoutGuard], (guard: CanActivateAuthLayoutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
