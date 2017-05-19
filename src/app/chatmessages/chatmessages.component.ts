import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../services/message/message.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-chatmessages',
  templateUrl: './chatmessages.component.html',
  styleUrls: ['./chatmessages.component.css'],
  providers: [MessageService, UserService]
})
export class ChatmessagesComponent implements OnInit {
	@Input() me:any;
	messages:any[] = [];

  	constructor(private messageService:MessageService, private userService:UserService) { 
  	}

  	ngOnInit() {  
  		this.messageService.getMessages(this.me.room_id).subscribe(messages=>{
  			this.messages = [];
  			messages.forEach(message=> {
  				this.userService.getuserByPublicId(message.public_id).subscribe(user=> {
  					message.user = user[0];
  					this.messages.push(message);
  					//console.log(this.messages);
  				});
  			})
  		});	
  	}

}
