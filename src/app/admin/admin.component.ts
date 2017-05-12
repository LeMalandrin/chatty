import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserService]
})
export class AdminComponent implements OnInit {
	  isRoomManagerVisible:boolean = true;
	  isUserManagerVisible:boolean = false;
    me:any;
    logged:boolean;
  
  	constructor(private userService:UserService) {      
      let my_id = localStorage.getItem('me');
      if(my_id != null) {
        this.logged=true;
        this.me = this.userService.getMe(my_id).subscribe(me=>{
          this.me = me;
        });
      } else {
        this.logged=false;
      }
    }


  	ngOnInit() {
  	}

  	setRoomManagerVisibility() {
  		this.isRoomManagerVisible = true;
  		this.isUserManagerVisible = false;
  	}


  	setUserManagerVisibility() {
  		this.isUserManagerVisible = true;
  		this.isRoomManagerVisible = false;
  	}

}
