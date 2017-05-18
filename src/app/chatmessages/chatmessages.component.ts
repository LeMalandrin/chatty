import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-chatmessages',
  templateUrl: './chatmessages.component.html',
  styleUrls: ['./chatmessages.component.css'],
  providers: [MessageService]
})
export class ChatmessagesComponent implements OnInit {
	@Input() me:any;
  	constructor(private messageService:MessageService) { 
  	}

  	ngOnInit() {  
  		this.messageService.getMessages(this.me.room_id);	
  	}

}
