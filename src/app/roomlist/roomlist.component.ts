import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../models/room';
import { RoomService } from '../services/room/room.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css'],
  providers: [RoomService, UserService]
})
export class RoomlistComponent implements OnInit {
	@Input() me:any;
	rooms:any[];

  	constructor(private roomService:RoomService, private userService:UserService) { }

  	ngOnInit() {
  		this.loadRoomlist();
  	}

    loadRoomlist() {
      this.roomService.getRooms().subscribe(rooms=>{
        this.rooms = rooms;
        this.rooms.forEach(room=> {
          var room_id = room.public_id;
           room.occupants = [];


          this.roomService.getOccupantsByRoomId(room_id).subscribe(rooms_users=>{
            rooms_users.forEach(room_user=>{
              this.userService.getUser(room_user.user_id).subscribe(occupant=>{
                room.occupants.push(occupant);
              })              
            })
          });
        })
      });
    }

}
