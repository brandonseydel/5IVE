export class Salon{
    tabs:Array<any> = [{title:"1", selected:true, html:"<div>aasdfasdfasd</div>"},{title:"2"},{title:"3"}];
    
    
    selectTab(tab:any){
        this.tabs.forEach(x=>x.selected = false);
        tab.selected=true;
    }
    
    get selectedTab(){        
        return this.tabs.filter(x=>x.selected)[0];
    }
    
}