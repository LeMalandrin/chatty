import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Room } from '../models/room';
import { RoomService } from '../services/room/room.service';
import { UserService } from '../services/user/user.service';
import { ContextMenuComponent } from 'ngx-contextmenu/';

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
    });
  }

}
