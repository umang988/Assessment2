import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(users : User[], searchValue : string): User {
    if(!users || !searchValue){
      return users;
    }
    return users.filter(user =>
      user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.city.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.department.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.mobile.toLowerCase().includes(searchValue.toLowerCase())
      );
  }

}
