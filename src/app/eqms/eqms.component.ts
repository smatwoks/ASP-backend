import { Component } from '@angular/core';

@Component({
  selector: 'app-eqms',
  templateUrl: './eqms.component.html',
  styleUrls: ['./eqms.component.css']
})
export class EqmsComponent {
  v:any="";

  ngOnInit(): void{
  
    let value:any = localStorage.getItem("name");
    console.log(value);
    let val = JSON.parse(value);
    console.log(val.name);
    this.v=val.name;
    if(this.v = "reddy"){
      window.location.reload();
      localStorage.removeItem("name");
     }
  };
  
  }
  