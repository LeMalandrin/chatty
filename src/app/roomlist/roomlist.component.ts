import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {
	@Input() me:any;

  	constructor() { }

  	ngOnInit() {
  	}

}
