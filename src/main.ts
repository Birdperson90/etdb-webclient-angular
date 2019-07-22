import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '@etdb/app.module';
import { environment } from 'environments/environment';
import 'hammerjs';

if (environment.production) {
    enableProdMode();
    console.log = () => { };
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
