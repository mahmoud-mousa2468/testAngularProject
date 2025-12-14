import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loadInterceptor } from './core/interceptor/load.interceptor';
import { errorInterceptor } from './core/interceptor/error.interceptor';
import { headerInterceptor } from './core/interceptor/header.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideClientHydration(),
  provideHttpClient(withFetch(),
  withInterceptors([loadInterceptor, errorInterceptor, headerInterceptor])),
  importProvidersFrom(NgxSpinnerModule),
  provideAnimations(),
  provideToastr()
]
};
