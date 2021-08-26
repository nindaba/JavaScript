export interface Pet{
    id:string;
    name:string;
    age:number;
    image:string;
    owner:Person;
    trainee:Trainee;
    breed:string;
    started:Date;
    passed:string[];
    subjects:string[];
}
export interface Person{
    id:string;
    fullName:string;
    phoneNumber:string;
    email:string;
    address:string;
}
export interface Trainee{
    id:string;
    details:Person;
    started:Date;
    trannings:number;
    rates:number;
}