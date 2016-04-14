import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = '5IVE';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'stylists',      name: 'MEET 5IVE',    moduleId: 'stylists',     nav: true, title: 'MEET 5IVE' },
      { route: 'users',         name: 'SALON',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'users',         name: 'SPA',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'users',         name: 'LASHES',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'users',         name: 'PACKAGES',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'users',         name: 'GIFT CARDS',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
