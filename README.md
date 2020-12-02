# AngularSeed

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

# UI Library

[AntDesign](https://ng.ant.design/docs/introduce/en) version 10.1.2

# Other Libraries

[Ngx-translate](http://www.ngx-translate.com/) version 13.0.0 
NGX-Translate is an internationalization library for Angular.

[Ngx-translate-extract](https://github.com/biesbjerg/ngx-translate-extract) version 7.0.3
Extract translatable (ngx-translate) strings and save as a JSON or Gettext pot file. Merges with existing strings if the output file already exists.

[Pako](https://www.npmjs.com/package/pako) version 2.0.2
zlib port to javascript, very fast!

# Architecture

AppModule: Bootstrapping module

CoreModule: Contains base classes, services required in every module, AuthGuards, Services required in application like loggerService, applicationService, localstorageService...

ShareModule: Contains components, directives which can be used in multiple modules

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
