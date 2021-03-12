import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { HeaderPresentationComponent } from './header-container/header-presentation/header-presentation.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [HeaderContainerComponent, HeaderPresentationComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports : [
    HeaderContainerComponent,
  ]
})
export class CoreModule { }
