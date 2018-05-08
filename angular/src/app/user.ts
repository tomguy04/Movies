import { Bike } from "./bike";

export class User {
    _id: string;
    title: string;

    name:string = '';
    stars: number;
    review: string;

    bike:Bike[];
}