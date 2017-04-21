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


	getRooms() {	
		return this.af.database.list('/rooms');
	}

}
