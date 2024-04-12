import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstname: string ="";
  lastname: string ="";
  email: string ="";
  password: string ="";
  constructor(private router: Router,private http: HttpClient) 
  {
  }
  ngOnInit(): void
  {
  }
  register()
  {
    let bodyData = 
    {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:2003/admin/create",bodyData).subscribe((resultData: any)=>
    {
      if (resultData.status) 
        {
      
           this.router.navigateByUrl('/user');
    
        } 

    });
  }
  save()
  {
    this.register();
  }
}
