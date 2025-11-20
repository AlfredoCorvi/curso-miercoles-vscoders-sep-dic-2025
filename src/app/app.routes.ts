import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Alfredo } from './pages/alfredo/alfredo';
import { Renata } from './pages/renata/renata';
import { Abigail } from './pages/abigail/abigail';
import { Lidia } from './pages/lidia/lidia';
import { Antonio } from './pages/antonio/antonio';

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'alfredo', component:Alfredo},
    {path: 'renata', component:Renata},
    {path: 'abigail', component:Abigail},
    {path: 'lidia', component:Lidia},
    {path: 'antonio', component:Antonio},
    {path: '**', redirectTo:''}
];