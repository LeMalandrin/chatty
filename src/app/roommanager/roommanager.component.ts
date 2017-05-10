import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RoomService } from '../services/room/room.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-roommanager',
  templateUrl: './roommanager.component.html',
  styleUrls: ['./roommanager.component.css'],
  providers: [RoomService]
})
export class RoommanagerComponent implements OnInit {
	@Input() me:any;
  	isListVisible:boolean = true;
  	isAddModalVisible:boolean = false;
	rooms:any[];

    @ViewChild('modal')
    modal: ModalComponent;


  	constructor(private roomService:RoomService) { }

  	ngOnInit() {
  		this.roomService.getRooms().subscribe(rooms=>{
      		this.rooms = rooms;
      	});
  	}

  	showAddModal() {
  		this.isListVisible = false;
  		this.isAddModalVisible = true;
  	}

}
