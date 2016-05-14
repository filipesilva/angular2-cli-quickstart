import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2CliQuickstartAppComponent } from '../app/angular2-cli-quickstart.component';

beforeEachProviders(() => [Angular2CliQuickstartAppComponent]);

describe('App: Angular2CliQuickstart', () => {
  it('should create the app',
      inject([Angular2CliQuickstartAppComponent], (app: Angular2CliQuickstartAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-cli-quickstart works!\'',
      inject([Angular2CliQuickstartAppComponent], (app: Angular2CliQuickstartAppComponent) => {
    expect(app.title).toEqual('angular2-cli-quickstart works!');
  }));
});
