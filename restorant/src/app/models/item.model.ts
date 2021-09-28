import { Properties } from "./properties.model";

export interface Item extends Properties{
    images: string[];
    category: string;
    price: number;
}