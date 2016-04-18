declare var Parallax: any; 
export class Welcome {
    services = [
        { name: "testadsf" },
        { name: "ASDFASDFAS" },
        { name: "testadsf" },
        { name: "ASDFASDFAS" },
        { name: "testadsf" },
        { name: "ASDFASDFAS" },
        { name: "testadsf" },
        { name: "ASDFASDFAS" }];
        
        attached(){
            var p = new Parallax('.parallax').init();
        }
}
