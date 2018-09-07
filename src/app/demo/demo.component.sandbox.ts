import { sandboxOf } from 'angular-playground';
import { of, Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DemoComponent } from './demo.component';

// create a mock service instance
class MockTranslateService {
  onTranslationChange = new Observable();
  onLangChange = new Observable();
  onDefaultLangChange = new Observable();
  get = () => of('foo');
}

export default sandboxOf(DemoComponent, {
    // provide the mock service instance so it can be used by Angular's dependency injection
    providers: [{ provide: TranslateService, useClass: MockTranslateService }]
})
.add('Demo', {
    template: `<div>translation is: <strong>{{ 'TITLE' | translate }}</strong></div>`
});
