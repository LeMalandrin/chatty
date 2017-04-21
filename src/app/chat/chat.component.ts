import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [UserService]
})
export class ChatComponent implements OnInit {
	me:any;
	window_height:number;
  	constructor(private userService:UserService) {
  		this.window_height = window.innerHeight;
  	}

  	ngOnInit() {  	
    	let my_id = localStorage.getItem('me');
    	if(my_id != null) {
  			this.me = this.userService.getMe(my_id).subscribe(me=>{
	        	this.me = me;
	      	});
    	}
  	}

}
