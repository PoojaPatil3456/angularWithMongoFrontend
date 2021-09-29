import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'addEmployee',component:AddComponent},
  {path:'delete',component:DeleteUserComponent},
  {path:'display',component:DisplayUserComponent},
  {path:'update',component:UpdateUserComponent},
  {path:'signin',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[DeleteUserComponent,DisplayUserComponent,UpdateUserComponent]