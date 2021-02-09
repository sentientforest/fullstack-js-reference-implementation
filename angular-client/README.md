# AngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

<p>This is a starter template that has been slightly extended beyond a
  vanilla angular-cli install.
</p>
<p>The application includes ng-bootstrap, and the bootstrap css.
Feel free to use off-the-shelf bootstrap components to implement
the user interface.
</p>
<p>Included with the code repository is a backend Express / Node.js mock
  service. It provides a list of JSON objects representing the countries
  of the world, as well as Create, Read, Update, and Delete REST methods
  for the individual objects. The goal of this exercise is to implement
  a UI that consumes these API calls.
</p>

<p><i>The API call to list the countries can be found here
(note: see the parent / root README and start the Node.js server first):</i></p>
<ul>
  <li>Dev (while running ng serve):
    <a href="http://127.0.0.1:9000/api/countries">
      http://127.0.0.1:9000/api/countries
    </a>
  </li>
  <li>Prod / Build:
    <a href="/api/countries">
      /api/countries
    </a>
  </li>
</ul>
<p>The Angular application has been preconfigured to use
  the cross-domain call on port 9000 for dev,
  and use the same-origin relative path for production / build.
</p>

An Angular service has also been started to interact with the API and
provide RxJS Observables and error handling from the responses.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Additional Libraries

This project uses ng-bootstrap and Bootstrap CSS 4.x.
Some links for reference:

[https://ng-bootstrap.github.io/#/components/accordion/examples](https://ng-bootstrap.github.io/#/components/accordion/examples)
[https://getbootstrap.com/docs/4.4/layout/overview/](https://getbootstrap.com/docs/4.4/layout/overview/)


## Build

Run `ng build --base-href='/angular/'` to build the project.

Note the base-href flag. This ensures that our application will worked when
served from it's relative base path by our backend Node.js server.

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
