import {  Component, ɵɵqueryRefresh } from '@angular/core';

@Component({
  selector: 'app-caaqms',
  templateUrl: './caaqms.component.html',
  styleUrls: ['./caaqms.component.css']
})
export class CaaqmsComponent {
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

  
