import { Component,  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  
  set(){
    // let name = String(this.name);
    let data ={ id:1,name:'reddy'};
          localStorage.setItem("name", JSON.stringify(data));
          console.log("true");
  }
  
  
}
