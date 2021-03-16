import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { ListPesentationComponent } from './list-container/list-pesentation/list-pesentation.component';
import { FormPesentationComponent } from './form-container/form-pesentation/form-pesentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [UserComponent, ListContainerComponent, FormContainerComponent, ListPesentationComponent, FormPesentationComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    
  ]
})
export class UserModule { }
