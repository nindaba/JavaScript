const host: string ='http://localhost:5001';
export const CATEGORY:string= `${host}/item-service/category`;
export const CATEGORY_ITEM = (id:string):string=> `${host}/item-service/category/${id}/items`;
export const CATEGORY_ITEMS =  `${host}/item-service/category/items`;


