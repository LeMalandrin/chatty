import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
	user:User = new User();
	errors:string[] = [];
	controls:string[] = [];

  	constructor(private userService:UserService, private router:Router) {
  		this.controls['login'] = "form-group";
  		this.controls['password'] = "form-group";
  	}

  	ngOnInit() {
  	}


  	connect() {  		
  		this.controls['login'] = "form-group";
  		this.controls['password'] = "form-group";

  		this.userService.setUser(this.user);
  		let login = this.userService.login();
  		if(login != null) {
  			login.then((auth)=>{
          localStorage.setItem('me', auth.uid);
	  			this.router.navigate(['']);
  			}).catch((error)=>{  				
	  			this.errors['password'] = (this.errors['password']!=undefined) ? this.errors['password'] : [];
	  			this.errors['password'].push("Le mot de passe est invalide");
	  			this.controls['password'] = "form-group has-error";
  			})
  		} else {
  			this.errors['login'] = (this.errors['login']!=undefined) ? this.errors['login'] : [];
  			this.errors['login'].push("L'adresse email ou le nom d'utilisateur n'existe pas");
	  		this.controls['login'] = "form-group has-error";
  		}
  	}

}
