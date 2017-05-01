import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [UserService]
})
export class LogoutComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) {
  	if(localStorage.getItem('me')) {     
        userService.logout();   
        localStorage.removeItem('me');
    }


    router.navigate(['']);
    location.reload();
  }

  ngOnInit() {
  }

}
