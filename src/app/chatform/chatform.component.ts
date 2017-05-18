import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-chatform',
  templateUrl: './chatform.component.html',
  styleUrls: ['./chatform.component.css'],
  providers: [MessageService]
})
export class ChatformComponent implements OnInit {
	message:Message = new Message();
	@Input() me:any;
  	constructor(private messageService:MessageService) {
  		
  	}

 	ngOnInit() {
 	}

 	sendMessage() {
 		this.message.user_id = this.me.public_id;
 		this.message.room_id = this.me.room_id;

  		if(this.message.content != "") {
 			this.messageService.setMessage(this.message);
 			this.messageService.create();
  		}
 	}

}
