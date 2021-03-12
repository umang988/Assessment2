import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { ListPesentationComponent } from './list-container/list-pesentation/list-pesentation.component';
import { FormPesentationComponent } from './form-container/form-pesentation/form-pesentation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserComponent, ListContainerComponent, FormContainerComponent, ListPesentationComponent, FormPesentationComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
