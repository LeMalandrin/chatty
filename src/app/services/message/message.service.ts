import { Injectable } from '@angular/core';
import { Message } from '../../models/message';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MessageService {
	message:any;
	messages:any[];
	repository:FirebaseListObservable<any>;

  	constructor(private af: AngularFire) {  		
		this.repository = af.database.list('/messages');
  	}

  	create() {
  		this.repository.push({
  			public_id: this.rand() + this.rand(),
  			room_id: this.message.room_id,
  			user_id: this.message.user_id,
  			content: this.message.content
  		});
  	}

  	setMessage(message) {
  		this.message = message;
  	}


  	getMessages(room_id) {
  		
  	}

	rand = function(){
	    return Math.random().toString(36).substr(2); // remove `0.`
	};
}
