import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Alfredo } from './pages/alfredo/alfredo';
import { Renata } from './pages/renata/renata';

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'alfredo', component:Alfredo},
    {path: 'renata', component:Renata},
    {path: '**', redirectTo:''}
];