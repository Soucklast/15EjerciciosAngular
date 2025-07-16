import { Routes } from '@angular/router';
import { ejercicio1 } from './ejercicio1/ejercicio1';
import { Ejercicio2 } from './ejercicio2/ejercicio2';
import { Ejercicio3 } from './ejercicio3/ejercicio3';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "ejercicio1",
        pathMatch: "full"
    },
    {
        path: "ejercicio1",
        component: ejercicio1,
    },
    {
        path: "ejercicio2",
        component: Ejercicio2
    },
    {
        path: "ejercicio3",
        component: Ejercicio3
    }

];
