import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email: string = '';
  name:string='';
  phone:string='';
  msg:string='';
  isLogin: boolean = true;
  erroMessage: string = "";
  constructor(private router: Router,private http: HttpClient) { }
  login() {
    console.log(this.email);
    let bodyData = {
      email: this.email,
      name:this.name,
      phone:this.phone,
      msg:this.msg
    };
    console.log(bodyData);
        this.http.post("http://localhost:3000/sendlink", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
        console.log(resultData.message);

        // if (resultData.message == "admin") 
        // {
      
        //    this.router.navigateByUrl('/admin');
    
        // }  else if(resultData.message == "signup")
        //   {
        //    this.router.navigateByUrl('/signup');
        //  }
        // else if(resultData.status == "1")
        //  {
        //   this.router.navigateByUrl('/password');
        // }
        // else{
        //   alert("Incorrect Email or Password");
        //   console.log("Errror login");
        // }
      });
    }

}
