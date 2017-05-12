import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.component.html',
  styleUrls: ['./usermanager.component.css'],
  providers: [UserService]
})
export class UsermanagerComponent implements OnInit {
	users:any[];
	role:string = "";
    user:User = new User();
    @ViewChild('roleModal')
    roleModal: ModalComponent;
    @ViewChild('detailsModal')
    detailsModal: ModalComponent;

	constructor(private userService:UserService) {}

  	ngOnInit() {  		
  		this.userService.getUsers().subscribe(users=>{
    		this.users = users;
    	});
  	}

  	showDetailsModal(user_id) {
  		this.userService.getUser(user_id).subscribe(user=> {
  			this.user = user;
  			this.detailsModal.open();
  		})
  	}  	
  	closeDetailsModal(user_id) {
  		this.detailsModal.close();
  		this.user = new User();
  	}

  	lock(user_id) {
  		this.userService.lock(user_id);
  	}
  	unlock(user_id) {
  		this.userService.unlock(user_id);
  	}

  	showRoleModal(user_id) {
  		this.userService.getUser(user_id).subscribe(user=> {
  			this.user = user;
  			this.roleModal.open();
  		})
  	}  	
  	closeRoleModal(user_id) {
  		this.roleModal.close();
  		this.user = new User();
  	}

  	changeRole(user_id) {
  		this.userService.updateRole(user_id, this.role);
  		this.closeRoleModal(user_id);
  		
  	}
}
