import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {

  if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
    const valor = sessionStorage.getItem('login');

    if (valor === 'true') {
      return true;
    }
  }
  
  return false;
};
