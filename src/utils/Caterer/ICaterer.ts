/*
export interface ICaterer{
    name: string;
    description: string;
    href: string;
    image: string;
    address: string;
}
*/

export interface ICaterer {
    id: number;
    resturant_id: string;
    name:string;
    vendor_id:string;
    email:string;
    address:string;
    delivery:boolean;
    delivery_radius:number;
    lead_time:number;
    min_order:number;
    max_order:number;
    capcity:number;
    operating_days:string;
    holiday_hours:number;
    full_serve:boolean;
    safety:string;
    description:string;
    createdAt:Date;
    updatedAt:Date;
}