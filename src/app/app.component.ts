import { Component } from '@angular/core';

import './rxjs-operators';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { LanguageService } from './language';

@Component({
  selector: 'seed-app',
  template: `
    <div class="container">
      <nav class="navbar navbar-dark bg-primary">
        <a routerLink="" routerLinkActive="active" class="navbar-brand">HP</a>
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a routerLink="items" routerLinkActive="active" class="nav-link">Items</a>
          </li>
          <li class="nav-item">
            <lang-toggle></lang-toggle>
          </li>
        </ul>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  constructor(languageService: LanguageService,
              translateService: TranslateService) {
    languageService.langChanged$.subscribe(lang => {
          // translateService.resetLang(lang); uncomment if you want to call API everytime
          translateService.use(lang);
        }
    )
  }
}
