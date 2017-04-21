import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';

export const routes = [
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '',
		component: HomeComponent
	},	
	{
		path: 'chat',
		component: ChatComponent
	}
];
