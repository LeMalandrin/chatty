import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { RoomService } from '../services/room/room.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
  providers: [UserService, RoomService]
})
export class LogoutComponent implements OnInit {
  @Input() me:any;
  constructor(private userService:UserService, private roomService:RoomService, private router:Router) {
  	if(localStorage.getItem('me')) {     
        userService.logout(); 
        userService.getMe(localStorage.getItem('me')).subscribe(user=>{          
          userService.setUser(user); 
          userService.update({
            room_id: "",
            isConnected: false
          });                    
        })

        localStorage.removeItem('me');
    }


    router.navigate(['login']);
    location.reload();
  }

  ngOnInit() {
  }

}
