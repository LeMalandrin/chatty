export class Message {
	public_id:string;
	content:string;
	room_id:string;
	user_id:string;

	constructor() {
		this.public_id = "";
		this.content = "";
		this.room_id = "";
		this.user_id = "";
	}
}