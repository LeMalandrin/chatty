export class User {
	public_id:string;
	email:string;
	username:string;
	password:string;
	password_confirm:string;

	constructor() {
		this.public_id = "";
		this.email = "";
		this.username = "";
		this.password = "";
		this.password_confirm = "";
	}
}