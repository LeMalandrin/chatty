import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './firebase.config';
import { firebaseAuthConfig } from './firebase.auth.config';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { RoommanagerComponent } from './roommanager/roommanager.component';
import { UsermanagerComponent } from './usermanager/usermanager.component';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
//import { ContextMenuModule } from 'ngx-contextmenu/';
import { UserlistComponent } from './userlist/userlist.component';
import { ChatmessagesComponent } from './chatmessages/chatmessages.component';
import { ChatformComponent } from './chatform/chatform.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ChatComponent,
    RoomlistComponent,
    LogoutComponent,
    AdminComponent,
    RoommanagerComponent,
    UsermanagerComponent,
    UserlistComponent,
    ChatmessagesComponent,
    ChatformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    Ng2Bs3ModalModule,
    //ContextMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
