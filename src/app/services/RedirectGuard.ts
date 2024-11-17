import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const originalUrl = state.url; // L'URL d'origine (exemple `/toto`)
    
    // Utiliser l'URL d'origine pour rediriger vers l'URL externe
    const externalUrl = `https://livret-competences.eldevia.fr${originalUrl}`;
    window.location.href = externalUrl;
    // alert(externalUrl);
    return false; // Empêche l'affichage de la route Angular
  }
}
