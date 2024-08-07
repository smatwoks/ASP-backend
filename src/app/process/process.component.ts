import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent {
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