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
  			content: this.message.content,
  			created_at: this.getNow()
  		});
  	}


  	getNow() { 
  		let now = new Date(Date.now()); 		
  		let date = {day:"", month:"", year:"", hours:"", minutes:""};
  		
  		if(now.getDate()<10) {
  			date.day = 0 + now.getDate().toString();
  		} else { date.day = now.getDate().toString(); }

  		if(now.getMonth()+1<10) {
  			date.month = 0+(now.getMonth()+1).toString()
  		} else { date.month = (now.getMonth()+1).toString(); }

  		date.year = (now.getFullYear()).toString();

  		if(now.getHours()<10) {
  			date.hours = 0+now.getHours().toString()
  		} else { date.hours = now.getHours().toString(); }

  		if(now.getMinutes()<10) {
  			date.minutes = 0+now.getMinutes().toString()
  		} else { date.minutes = now.getMinutes().toString(); }

  		return date;
  	}

  	setMessage(message) {
  		this.message = message;
  	}


  	getMessages(room_id) {
  		return this.af.database.list('/messages', {
  			query:{
  				orderByChild:'room_id',
  				equalTo:room_id
  			}
  		});
  	}

	rand = function(){
	    return Math.random().toString(36).substr(2); // remove `0.`
	};
}
