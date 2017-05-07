import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room/room.service';

@Component({
  selector: 'app-roommanager-list',
  templateUrl: './roommanager-list.component.html',
  styleUrls: ['./roommanager-list.component.css'],
  providers: [RoomService]
})
export class RoommanagerListComponent implements OnInit {
	rooms:any[];
	
  	constructor(private roomService:RoomService) { }

  	ngOnInit() {
  		this.roomService.getRooms().subscribe(rooms=>{
        	this.rooms = rooms;
        });
  	}

}
