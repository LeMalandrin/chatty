import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../models/room';
import { RoomService } from '../services/room/room.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css'],
  providers: [RoomService]
})
export class RoomlistComponent implements OnInit {
	@Input() me:any;
	rooms:any[];

  	constructor(private roomService:RoomService) { }

  	ngOnInit() {
  		this.roomService.getRooms().subscribe(rooms=>{
			this.rooms = rooms;
		})
  	}

}
