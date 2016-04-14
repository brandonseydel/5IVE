import {Aurelia} from 'aurelia-framework';
import {bootstrap} from 'aurelia-bootstrapper-webpack';

import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../styles/styles.scss';

bootstrap((aurelia: Aurelia): void => {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css');
    
  aurelia.start().then(() => aurelia.setRoot('app', document.body))});
