import { Injectable } from '@angular/core';
import { Room } from '../../models/room';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class RoomService {
	room:Room;
	rooms:any[];
	repository:FirebaseListObservable<any>;

	constructor(private af: AngularFire) {
		this.repository = af.database.list('/rooms');
		af.database.list('/rooms').subscribe(rooms=>{
			this.rooms = rooms;
		})
	}

	getRoom(public_id) {      
		for(var room of this.rooms) {
			if(room.public_id === public_id) {
				return room;
			}
		}
		return false;
	}

	getOccupants(query) {
		return this.af.database.list('/rooms_users', {
	    	query
	    });
	}
	getRooms() {	
		return this.af.database.list('/rooms');
	}

	create() {
		if(this.isValid()) {
			this.repository.push({
				public_id: this.rand() + this.rand(),
				label: this.room.label,
				description: this.room.description
			});
			return true;
		} else { return false; }
	}

	deleteRoom(public_id) {
		let private_id = this.getRoom(public_id).$key;
		this.af.database.object('/rooms/' + private_id).remove();
	}

	removeOccupantByUserId(user_id) {
		this.af.database.list('/rooms_users', {
		    query : {
		    	orderByChild: 'user_id',
	            equalTo: user_id,
	        }
	    }).remove();
	}

	addOccupant(user_id, room_id) {
		this.af.database.list('/rooms_users').push({
	    	room_id: room_id,
            user_id: user_id
		});
	}



	update() {
		if(this.isValid()) {
			let private_id = this.getRoom(this.room.public_id).$key;
			this.af.database.object('/rooms/' + private_id).update({
				label: this.room.label,
				decription: this.room.description
			});
			return true;
		} else { return false; }
	}

	exists(room_to_check) {
		let existing = false;
		for(var room of this.rooms) {
			if(room.public_id == room_to_check) {
				existing = true;
			}
		}
		return existing;
	}

	isValid() {
		let isValidLabel = (this.isValidLabel());
		return isValidLabel;
	}

	isValidLabel() {
		return this.room.label.match(/^[A-Za-z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\_\-\s]{1,30}$/);
	}

	rand = function(){
	    return Math.random().toString(36).substr(2); // remove `0.`
	};

}
