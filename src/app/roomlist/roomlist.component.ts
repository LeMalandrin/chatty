import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Room } from '../models/room';
import { RoomService } from '../services/room/room.service';
import { UserService } from '../services/user/user.service';
import { ContextMenuComponent } from 'angular2-contextmenu/angular2-contextmenu';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css'],
  providers: [RoomService, UserService]
})
export class RoomlistComponent implements OnInit {
	@Input() me:any;
	rooms:any[];

  public items = [
      { name: 'John', otherProperty: 'Foo' },
      { name: 'Joe', otherProperty: 'Bar' }
  ];
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;


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
