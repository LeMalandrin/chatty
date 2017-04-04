import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class UserService {
	user:User;
	users:any[];
	repository:FirebaseListObservable<any>;

	constructor(private af: AngularFire) {
		this.repository = af.database.list('/users');
		af.database.list('/users').subscribe(users=>{
			this.users = users;
		})
	}



	getMe(private_id:string) {
		return this.af.database.object('/users/' + private_id);
	}


	logout() {
		this.af.auth.logout();
	}
	login() {
		this.user.email = this.user.login.toLowerCase();
		let relatedUser:any;
		if(this.isValidEmail()) {
			//Le login est une adresse email, on se connecte avec l'adresse email
			for(var user of this.users) {
				if(user.email.toLowerCase() == this.user.email) {
					relatedUser = user;
				}
			}
			if(relatedUser != undefined) {
				return this.af.auth.login({email: this.user.email, password: this.user.password});
			} else {
				return null;
			}
		} else {
			//Le login n'est pas une adresse email, on recherche le compte correspondant au login et on récupère l'email
			this.user.username = this.user.login.toLowerCase();
			for(var user of this.users) {
				if(user.username.toLowerCase() == this.user.username) {
					relatedUser = user;
				}
			}
			if(relatedUser != undefined) {
				return this.af.auth.login({email: relatedUser.email, password: this.user.password});
			} else {
				return null;
			}
		}
	}




	create() {
		if(this.isValid()) {
			this.af.auth.createUser({email: this.user.email, password: this.user.password}).then(auth=>{
				this.af.auth.logout();
				this.af.database.object('/users/' + auth.uid).set({
					public_id: this.rand(),
					private_id: auth.uid,
					email: this.user.email.toLowerCase(),
					username: this.user.username,
					status: this.user.status,
					role: this.user.role,
					isConnected: false
				});
			});
			return true;
		} else { return false; }
	}

	isValid() {
		let isValidEmail = (this.isValidEmail() && !this.isExistingEmail());
		let isValidUsername = (this.isValidUsername() && !this.isExistingUsername());
		let isValidPassword = this.isValidPassword();
		let isValidPasswordConfirm = this.isValidPasswordConfirm();
		return isValidEmail && isValidUsername && isValidPassword && isValidPasswordConfirm;
	}

	isValidEmail() {
		return this.user.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	}
	isExistingEmail() {
		let existing = false;
		for(var user of this.users) {
			if(this.user.email.toLowerCase()===user.email.toLowerCase()) {
				existing = true;
			}
		}
		return existing;
	}
	isValidUsername() {
		return this.user.username.match(/^[A-Za-z0-9\_\-]{5,15}$/);
	}
	isExistingUsername() {
		let existing = false;
		for(var user of this.users) {
			if(this.user.username.toLowerCase()===user.username.toLowerCase()) {
				existing = true;
			}
		}
		return existing;
	}
	isValidPassword() {
		return this.user.password.match(/^[A-Za-z0-9]{6,20}$/);
	}	
	isValidPasswordConfirm() {
		return this.user.password===this.user.password_confirm;
	}


	setUser(user:User) {
		this.user = user;
	}

	rand = function() {
	    return Math.random().toString(36).substr(2); // remove `0.`
	};
}
