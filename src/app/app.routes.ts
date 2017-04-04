import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes = [
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'login',
		component: LoginComponent
	}	
];
