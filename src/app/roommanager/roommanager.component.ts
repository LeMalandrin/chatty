import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-roommanager',
  templateUrl: './roommanager.component.html',
  styleUrls: ['./roommanager.component.css']
})
export class RoommanagerComponent implements OnInit {
	@Input() me:any;
  	
  	constructor() { }

  	ngOnInit() {
  	}

}
