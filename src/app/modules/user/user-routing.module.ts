import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { FormContainerComponent } from './form-container/form-container.component';

const routes: Routes = [
  { path: '', component: UserComponent,
  children : [
    { path : '', component : ListContainerComponent },
    { path : 'add', component : FormContainerComponent }
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
