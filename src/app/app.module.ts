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
import { RoommanagerListComponent } from './roommanager-list/roommanager-list.component';

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
    RoommanagerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
