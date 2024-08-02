import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 


  password:string = "";

  email: string = '';
  isLogin: boolean = true;
  erroMessage: string = "";
  constructor(private router: Router,private http: HttpClient) { }


  sendotp(){
    let bodyData = {
      email: this.email,
    };
    this.http.post("http://localhost:2003/sendlink" ,bodyData).subscribe(  (resultData: any) => {
      console.log(resultData);
      console.log(resultData.message);
     
  
     
       
    });
  }




  login() {
    // console.log(this.email);
    // console.log(this.password);
    let bodyData = {
      email: this.email,
      password:this.password
    };
        this.http.post("http://localhost:2003/admin/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
        console.log(resultData.message);
        if (resultData.message == "admin") 
        {
           this.router.navigateByUrl('/admin');
    
        }
        else if(resultData.message == "false")
          {
            alert("Incorrect Email or Password");
         }
        else if(resultData.message == "signup")
          {
           this.router.navigateByUrl('/signup');
         }
        else if(resultData.message == "user")
         {
          console.log("asdfasdfsdf");

          this.router.navigateByUrl('/user');
        }
        else{
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });
    }
}
