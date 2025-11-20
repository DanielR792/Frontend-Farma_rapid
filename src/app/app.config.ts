import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';   // 👈 NUEVO
import { providePrimeNG } from 'primeng/config';            // ya lo tenías
import Aura from '@primeng/themes/aura';                    // ya lo tenías

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),        // 👈 IMPORTANTE: añadimos el HttpClient
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
