export class User {
	public_id:string;
	private_id:string;
	email:string;
	username:string;
	password:string;
	password_confirm:string;
	status:string;
	role:string;

	constructor() {
		this.public_id = "";
		this.private_id = "";
		this.email = "";
		this.username = "";
		this.password = "";
		this.password_confirm = "";
		this.status = "idle";
		this.role = "basic";
	}
}