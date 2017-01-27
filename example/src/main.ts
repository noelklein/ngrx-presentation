import './polyfills.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// The order of this import matters. It has to be imported after the above imports so that all dependencies are loaded first.
import { MainModule } from './app/main/main.module';

platformBrowserDynamic().bootstrapModule(MainModule);
