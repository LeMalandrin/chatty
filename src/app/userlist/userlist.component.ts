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
  		this.roomService.getOccupantsByRoomId(this.room.public_id).subscribe(rooms_users=>{
          rooms_users.forEach(room_user=>{
            this.userService.getUser(room_user.user_id).subscribe(occupant=>{
              this.room.occupants.push(occupant);
            })              
          })
        });
  	}

}
