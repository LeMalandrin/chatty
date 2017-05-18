import { Component, OnInit, Input } from '@angular/core';
import { RoomService } from '../services/room/room.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [RoomService, UserService]
})
export class UserlistComponent implements OnInit {
	@Input() room:any;
  	constructor(private roomService:RoomService, private userService:UserService) {
  	}

  	ngOnInit() {
  		this.loadUserlist();
  	}

  	loadUserlist() {
  		this.room.occupants = [];
  		this.roomService.getOccupants(this.room.public_id).subscribe(rooms_users=>{
        for(var occupant of rooms_users) {
          this.room.occupants.push(occupant);
        }
      });
  	}

}
