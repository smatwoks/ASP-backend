import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  isLogin: boolean = true;
  erroMessage: string = "";
  constructor(private router: Router,private http: HttpClient) {}
  login() {
    console.log(this.email);
    let bodyData = {
      email: this.email,
    };
        this.http.post("http://localhost:2003/admin/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
        console.log(resultData.message);
        if (resultData.message == "admin") 
        {
      
           this.router.navigateByUrl('/admin');
    
        }  else if(resultData.message == "signup")
          {
           this.router.navigateByUrl('/signup');
         }
        else if(resultData.status == "1")
         {
          this.router.navigateByUrl('/password');
        }
        else{
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });
    }
}
