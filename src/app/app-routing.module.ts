import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from 'app/app.component';


// creando un array de rutas
const routes : Routes =[
{ path: '', redirectTo: '/appComponent', pathMatch: "full"},
{ path: 'appComponent', component: AppComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
})
export class AppRoutingModule { }
