import {Aurelia, computedFrom} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;
  
  constructor(){
    window.onscroll = function(){
      alert("asdfafsddfs");
    }
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = '5IVE';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'stylists',      name: 'MEET 5IVE',    moduleId: 'stylists',     nav: true, title: 'MEET 5IVE' },
      { route: 'salon',      name: 'THE SALON',    moduleId: 'salon',     nav: true, title: 'THE SALON' },
      { route: 'spa',      name: 'THE SPA',    moduleId: 'spa',     nav: true, title: 'THE SPA' },
    ]);

    this.router = router;
  }
  
  get currentRoute():any{    
    var current = this.router.navigation.filter(x=>x.isActive)[0];
    if(current == null || current == this.router.navigation[0]){return null;}
    
    return current.title;
    
  }
  
  
  
}
