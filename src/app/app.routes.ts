import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'auth',
        loadChildren:()=>import('./auth/feactures/auth.routes')
    },
   {

        path:'formulario',
        loadChildren:()=>import('./formulario/formulario.routes')

   }
];
