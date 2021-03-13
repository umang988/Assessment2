export class User{
    public id? : string;
        public name : string;
        public email : string;
        public mobile : string;
        public city : string;
        public gender : string;
        public department : string;
        public hireDate : string;
        public permanent : boolean

    constructor(){
            this.id = null;
            this.name = null;
            this.email = null;
            this.mobile = null;
            this.city = null;
            this.gender = null;
            this.department = null;
            this.hireDate = null;
            this.permanent = null;
        
    }
}