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
  		this.roomService.getRooms().subscribe(rooms=>{
        this.rooms = rooms;
  			this.rooms.forEach(room=> {
          var room_id = room.$key;
           room.occupants = [];

          var query = {
            orderByChild: 'room_id',
            equalTo: parseInt(room_id) 
          };

          this.roomService.getOccupants(query).subscribe(rooms_users=>{
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
