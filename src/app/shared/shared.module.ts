import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user-services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { SortFilterPipe } from './pipe/sort-filter.pipe';


@NgModule({
  declarations: [SearchFilterPipe, SortFilterPipe],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SearchFilterPipe,
    SortFilterPipe
  ],
  providers : [
    UserService
  ]
})
export class SharedModule { }
