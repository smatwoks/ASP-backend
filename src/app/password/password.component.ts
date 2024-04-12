import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
 
  non:string= "";
  password:string = "";
  isLogin: boolean = true;
  erroMessage: string = "";
  constructor(private router: Router,private http: HttpClient) {}
  log() {
    let bodyData = {
      password: this.password,
    };
    console.log(this.non);
    if (this.password == this.non) 
      {
    
         this.router.navigateByUrl('/password');
  
      }else{
        this.http.post("http://localhost:2003/admin/password", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
        console.log(resultData.message);
        if (resultData.status) 
        {
      
           this.router.navigateByUrl('/user');
    
        } 
        else if(resultData.message == "password")
         {
          this.router.navigateByUrl('/password');
        }
        else{
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      }
    );
  }
    }
}
