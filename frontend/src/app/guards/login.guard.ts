import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);

  let token = localStorage.getItem('token');

  if (token) {
    router.navigate(['/main']);
    return false;
  } else {
    return true;
  }

};
