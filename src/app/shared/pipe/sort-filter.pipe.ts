import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/core/model/user.model';

@Pipe({
  name: 'sortFilter'
})
export class SortFilterPipe implements PipeTransform {

  transform(value: Array<User>): User {
    return value.sort((a,b)=>{
      let x=a.name.toLowerCase();
      let y=b.name.toLowerCase();
      if(x<y){
        return -1;
      }else{
        return 1;
      }
      return 0;
    });
  }

}
