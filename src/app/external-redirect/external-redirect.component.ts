import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatformService } from '../services/PlatformService';

@Component({
  selector: 'app-external-redirect',
  template: ''
})
export class ExternalRedirectComponent implements OnInit {
  constructor(private platformService: PlatformService, private router: Router) {}

ngOnInit(): void {
  // Récupérer l'URL d'origine via `window.history.state`
  const originalUrl = window.history.state.originalUrl;
  
  if (originalUrl && originalUrl !== '/external-redirect') {
    const externalUrl = `https://livret-competences.eldevia.fr${originalUrl}`;
    window.location.href = externalUrl;
  } else {
    console.error('URL d\'origine non trouvée');
  }
}
}
