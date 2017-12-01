import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContextMenuModule } from 'ngx-contextmenu';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { MenuComponent } from './_components/menu/menu.component';
import { AuthentificationGuard } from './_guards/index';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { AuthentificationService } from './_components/login/authentification.service';
import { HomeService } from './_components/home/home.service';
import { DataComponent } from './_components/data/data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
import { BytesPipe } from './_pipes/bytes.pipe';


@NgModule({
    declarations: [
        AppComponent, MenuComponent, HomeComponent, LoginComponent, RegisterComponent, DataComponent, BytesPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        ContextMenuModule,
        BrowserAnimationsModule,
        SimpleNotificationsModule.forRoot()
    ],
    providers: [
        AuthentificationGuard,
        AuthentificationService,
        HomeService,
        NotificationsService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }