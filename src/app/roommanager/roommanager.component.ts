import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RoomService } from '../services/room/room.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Room } from '../models/room';

@Component({
  selector: 'app-roommanager',
  templateUrl: './roommanager.component.html',
  styleUrls: ['./roommanager.component.css'],
  providers: [RoomService]
})
export class RoommanagerComponent implements OnInit {
	  @Input() me:any;
	  rooms:any[];
    room:Room = new Room();
    errors:string[] = [];
    controls:string[] = [];


    @ViewChild('addModal')
    addModal: ModalComponent;
    @ViewChild('updateModal')
    updateModal: ModalComponent;
    @ViewChild('detailsModal')
    detailsModal: ModalComponent;


  	constructor(private roomService:RoomService) {
      this.controls['label'] = "form-group";
    }

  	ngOnInit() {
  		this.roomService.getRooms().subscribe(rooms=>{
    		this.rooms = rooms;
    	});
  	}


    showDetailsModal(room_id) {
      this.detailsModal.open();
      let getRoom = this.roomService.getRoom(room_id);
      if(getRoom) {
        this.room = getRoom;
      }
    }
    closeDetailsModal() {
      this.detailsModal.close();
      this.room = new Room();    
    } 


  	showAddModal() {
      this.errors = [];
      this.controls['label'] = "form-group";
      this.addModal.open();
  	}
    closeAddModal() {
      this.addModal.close();
      this.room = new Room();    
      this.errors = []; 
      this.controls['label'] = "form-group"; 
    } 

    deleteRoom(room_id) {      
      let confirmation = confirm("Êtes-vous sûr ?");
      if(confirmation) {
        this.roomService.deleteRoom(room_id);
      } 
    }


    showUpdateModal(room_id) {
      this.errors = [];
      this.controls['label'] = "form-group";
      this.updateModal.open();
      let getRoom = this.roomService.getRoom(room_id);
      if(getRoom) {
        this.room = getRoom;
      }
    }
    closeUpdateModal() {
      this.updateModal.close();
      this.room = new Room();    
      this.errors = []; 
      this.controls['label'] = "form-group"; 
    } 

    updateRoom() {     
      this.roomService.room = this.room;
      if(this.roomService.update()) {
        this.updateModal.close();
        this.room = new Room();
      }
    }


    createRoom() {     
      this.roomService.room = this.room;
      if(this.roomService.create()) {
        this.addModal.close();
        this.room = new Room();
      }
    }


    validateLabel() {
      this.roomService.room = this.room;
      this.errors['label'] = [];
      if(this.room.label.length>0) {
        if(!this.roomService.isValidLabel()) {
          this.errors['label'].push("Le nom saisi est invalide (Entre 1 et 30 caractères, lettres, chiffres, tirets et espaces autorisés");
        }
      }
      this.updateControls();
    }

    updateControls() {      
      this.updateLabelControl();
    }

    updateLabelControl() {
      if(this.room.label.length>0) {
        if(this.errors['label']!=undefined) {
          if(this.errors['label'].length>0) {
            this.controls['label'] = "form-group has-error";
          } else {
            this.controls['label'] = "form-group has-success";
          }
        } else {
          this.controls['label'] = "form-group";          
        }
      } else {
        this.controls['label'] = "form-group";
      }
    }
}
