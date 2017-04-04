import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit {
	me:any;
  	constructor(private userService:UserService) {
  	}

  	ngOnInit() {
  		this.me = this.userService.getMe(localStorage.getItem('me'));
  	}

}
