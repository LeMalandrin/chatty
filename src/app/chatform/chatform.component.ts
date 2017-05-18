import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-chatform',
  templateUrl: './chatform.component.html',
  styleUrls: ['./chatform.component.css']
})
export class ChatformComponent implements OnInit {
	message:Message;
	@Input() me:any;
  	constructor() {
  	}

 	ngOnInit() {
 	}

 	sendMessage() {

  		console.log(this.me);
 	}

}
