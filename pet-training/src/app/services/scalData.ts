import { Person, Pet, Trainer } from "./models"

export const trainings:string[]=[
    'Koehler',
    'Motivation',
    'Clicker',
    'Electronic',
    'Model-rival',
    'Dominance-based',
    'Relationship'
]
export const pets : Pet[] =[
    {
        id:'1',
        name:'Simba',
        age:3,
        image:'https://www.thesprucepets.com/thmb/FEsGt1xpqpRi_YzoMCuzPEWcvso=/872x654/smart/filters:no_upscale()/1024px-Bulldog_inglese-cf544d354159462c8c0d93db5f1adbe6.jpg',
        owner:{
            username:'Ardy Divin',
            phoneNumber:'+257 696785577',
            email:'ardy@gmail.com',
            address:'Muyinga,Kibogoye 11,12-321'
        },
        trainer:
            {
                id:'1',
                details:{
                    username:'John Wick',
                    phoneNumber:'+(318) 319 4342 21',
                    email:'john@wick.com',
                    address:'LA 1212,21-31121'
                },
                started:new Date(),
                trannings:4,
                rates:4.5
            }
        ,
        breed:'Bulldog',
        started:new Date(),
        subjects:[
            {name:'Clicker',isCompleted:false},
            {name:'Electronic',isCompleted:true},
            {name:'Model-rival',isCompleted:true},
            {name:'Dominance-based',isCompleted:false}]
    },
    {
        id:'2',
        name:"litle pow",
        age:1,
        owner:{
            username:"ArdyDivin",
            phoneNumber:"+257 696785577",
            email:"ardy@gmail.com",
            address:"Muyinga,Kibogoye 11,12-321"
        },
        trainer:{
            id:"1",
            details:{
                username:"JohnWick",
                phoneNumber:"+(318) 319 4342 21",
                email:"john@wick.com",
                address:"LA 1212,21-31121"
            },
            started:new Date(),
            trannings:4,
            rates:4.5
        },
        breed:"chiwawa",
        subjects:[
            {name:"li",isCompleted:false},
            {name:"hd",isCompleted:false},
            {name:"lean",isCompleted:false},
            {name:"gfjd",isCompleted:false}],
        image:"https://www.google.com/search/static/gs/animal/cover_images/m0bt9lr_cover.png",
        started:new Date()
    }
]
export const people :Person[]=[
    {
        username:'ArdyDivin',
        phoneNumber:'+257 696785577',
        email:'ardy@gmail.com',
        address:'Muyinga,Kibogoye 11,12-321'
    },
    {
        username:'Kibuguzo',
        phoneNumber:'+257 3212577',
        email:'ardy@gmail.com',
        address:'Muyinga,Kinogo 01,21-221'
    },
    {
        username:'JohnWick',
        phoneNumber:'+(318) 319 4342 21',
        email:'john@wick.com',
        address:'LA 1212,21-31121'
    },

]
export const trainers:Trainer[]=[
    {
        id:'1',
        details:{
            username:'JohnWick',
            phoneNumber:'+(318) 319 4342 21',
            email:'john@wick.com',
            address:'LA 1212,21-31121'
        },
        started:new Date(),
        trannings:4,
        rates:4.5
    }
]