import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/user.model';

@Injectable()
export class UserService {

  public url : string = 'http://localhost:3000/user';

  constructor(private http : HttpClient) {

   }

   getData() : Observable<any>{
     return this.http.get(this.url);
   }

   getDataById(id) : Observable<any>{
     return this.http.get(`${this.url}/${id}`)
   }

   addData(data : User){
     this.http.post(this.url,data).subscribe((res : Response)=>{
        console.log("Successfully Data Added");
        
     })
   }

   putData(data : User,id : string){
     this.http.put(`${this.url}/${id}`,data).subscribe((res)=> {
       console.log("Data added Successfully")
     });
   }

   deleteData(id : string){
     this.http.delete(`${this.url}/${id}`).subscribe((res) => {
       console.log("User Deleted Successfully")
     })
   }
}
