import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { AuthentificationGuard } from './_guards/index';
import { DataComponent } from './_components/data/data.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthentificationGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: ':folderId', component: DataComponent, canActivate: [AuthentificationGuard]  },
   
    //   { path: ':fileId',  component: FilePreviewComponent }

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);