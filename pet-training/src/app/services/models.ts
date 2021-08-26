export interface Pet{
    id:string;
    name:string;
    age:number;
    image:string;
    owner:Person;
    trainee:Trainee;
    breed:string;
    started:Date;
    completed:string[];
    subjects:string[];
}
export interface Person{
    username:string;
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