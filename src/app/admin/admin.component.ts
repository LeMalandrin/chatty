import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	isRoomManagerVisible:boolean = true;
	isUserManagerVisible:boolean = false;

  	constructor() { }


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
