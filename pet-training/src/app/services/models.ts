export interface Pet{
    id:string;
    name:string;
    age:number;
    image:string;
    owner:Person;
    trainer:Trainer;
    breed:string;
    started:Date;
    subjects:{name:string,isCompleted:boolean}[];
}
export interface Person{
    username:string;
    phoneNumber:string;
    email:string;
    address:string;
}
export interface Trainer{
    id:string;
    details:Person;
    started:Date;
    trannings:number;
    rates:number;
}