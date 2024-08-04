import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  set(){
    // let name = String(this.name);
    let data ={ id:1,name:'reddy'};
          localStorage.setItem("name", JSON.stringify(data));
          console.log("true");
  }
  
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const headerElement = document.getElementById('header');
        if (headerElement) {
          headerElement.classList.remove('login');
          headerElement.classList.remove('password');
          headerElement.classList.remove('signup');
          headerElement.classList.remove('admin');
          headerElement.classList.remove('user');

          if (event.url === '/login') {
            headerElement.classList.add('login');
          } else if (event.url === '/password') {
            headerElement.classList.add('password');
          } else if (event.url === '/signup') {
            headerElement.classList.add('signup');
          }else if (event.url === '/admin') {
            headerElement.classList.add('admin');
          }else if (event.url === '/user') {
            headerElement.classList.add('user');
          }

        }
      }
    });
  }
}
