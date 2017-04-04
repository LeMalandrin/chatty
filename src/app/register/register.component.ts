import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
	user:User = new User();
	errors:string[] = [];
	controls:string[] = [];

  	constructor(private userService:UserService, private router:Router) { 
  		this.controls['email'] = "form-group";
  		this.controls['username'] = "form-group";
  		this.controls['password'] = "form-group";
  		this.controls['passwordConfirm'] = "form-group";
  	}

  	ngOnInit() {
  	}

  	register() {  		
	  	this.userService.setUser(this.user);
	  	if(this.userService.create()) {
	  		this.router.navigate(['']);
	  	}
  	}



  	validateEmail() {
	  	this.errors['email'] = [];
	  	this.userService.setUser(this.user);
  		if(this.user.email.length>0) {
	  		if(!this.userService.isValidEmail()) {
	  			this.errors['email'].push("L'adresse email saisie est invalide");
	  		}
	  		if(this.userService.isExistingEmail()) {
	  			this.errors['email'].push("L'adresse email saisie est déjà associée à un compte existant");
	  		}
	  	}
	  	this.updateControls();
  	}
  	validateUsername() {
	  	this.errors['username'] = [];
	  	this.userService.setUser(this.user);
  		if(this.user.username.length>0) {
	  		if(!this.userService.isValidUsername()) {
	  			this.errors['username'].push("Le nom d'utilsiateur saisi est invalide (Entre 5 et 15 caractères, peut contenir des majuscules, minuscules, chiffres et tirets)");
	  		}
	  		if(this.userService.isExistingUsername()) {
	  			this.errors['username'].push("Le nom d'utilisateur saisi existe déjà");
	  		}
	  	}
	  	this.updateControls();
  	}
  	validatePassword() {
	  	this.errors['password'] = [];	
	  	this.userService.setUser(this.user);
  		if(this.user.password.length>0) {  		
	  		if(!this.userService.isValidPassword()) {
	  			this.errors['password'].push("Le mot de passe saisi est invalide (Entre 6 et 20 caractères, peut contenir des majuscules, minuscules et chiffres)");
	  		}
	  	}
	  	this.updateControls();
  	}
  	validatePasswordConfirm() {
	  	this.errors['passwordConfirm'] = [];	
	  	this.userService.setUser(this.user);
  		if(this.user.password_confirm.length>0) {  		
	  		if(!this.userService.isValidPasswordConfirm()) {
	  			this.errors['passwordConfirm'].push("Les 2 mots de passe ne correspondent pas");
	  		}
	  	}
	  	this.updateControls();
  	}

  	updateControls() {
  		this.updateEmailControl();
  		this.updateUsernameControl();
  		this.updatePasswordControl();
  		this.updatePasswordConfirmControl();
  	}
  	updateEmailControl() {
  		if(this.user.email.length>0) {
  			if(this.errors['email'].length>0) {
  				this.controls['email'] = "form-group has-error";
  			} else {
  				this.controls['email'] = "form-group has-success";
  			}
  		} else {
  			this.controls['email'] = "form-group"
  		}
  	}
  	updateUsernameControl() {
  		if(this.user.username.length>0) {
  			if(this.errors['username'].length>0) {
  				this.controls['username'] = "form-group has-error";
  			} else {
  				this.controls['username'] = "form-group has-success";
  			}
  		} else {
  			this.controls['username'] = "form-group"
  		}
  	}
  	updatePasswordControl() {
  		if(this.user.password.length>0) {
  			if(this.errors['password'].length>0) {
  				this.controls['password'] = "form-group has-error";
  			} else {
  				this.controls['password'] = "form-group has-success";
  			}
  		} else {
  			this.controls['password'] = "form-group"
  		}
  	}  	
  	updatePasswordConfirmControl() {
  		if(this.user.password_confirm.length>0) {
  			if(this.errors['passwordConfirm'].length>0) {
  				this.controls['passwordConfirm'] = "form-group has-error";
  			} else {
  				this.controls['passwordConfirm'] = "form-group has-success";
  			}
  		} else {
  			this.controls['passwordConfirm'] = "form-group"
  		}
  	}
}
