import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
// name:String="";
set(){
  // let name = String(this.name);
  let data ={ id:1,name:'reddy'};
        localStorage.setItem("name", JSON.stringify(data));
        console.log("true");
}


}
