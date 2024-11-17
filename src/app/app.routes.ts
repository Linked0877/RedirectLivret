import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalRedirectComponent } from './external-redirect/external-redirect.component';
import { RedirectGuard } from './services/RedirectGuard';

export const routes: Routes = [
  // Route qui capture toutes les routes non trouvées et passe par le guard de redirection
  { path: '**', component: ExternalRedirectComponent, canActivate: [RedirectGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
