import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string = '';
  name:string='';
  phone:string='';
  msg:string='';
  isLogin: boolean = true;
  erroMessage: string = "";
  constructor(private router: Router,private http: HttpClient) { }
  

    send(){
      console.log(this.email);
    let bodyData = {
      email: this.email,
      name:this.name,
      phone:this.phone,
      msg:this.msg
    };
    console.log(bodyData);
      this.http.post("https://application-development-webdow-3.onrender.com/ok",bodyData).subscribe((result:any)=>{
        console.log(result.message);

        if(result.message == 'one'){
          
        alert("Student Registered Successfully");
        }
      })
    }

}
