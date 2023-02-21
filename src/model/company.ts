import { prop, mongoose } from '@typegoose/typegoose';

export class Partner {
    @prop({ type: String,unique: true})
    name!: string;
    @prop({ type: String})
    description: string;
}

export class Address {
    @prop({ type: String})
    city: string;
    @prop({ type: String})
    country: string;
    @prop({ type: String})
    zipcode: string;
}

export class Company {
    public _id!: mongoose.Types.ObjectId;

    @prop({ type: String,unique: true})
    public name!: string;

    @prop({ type: String})
    public description!: string;

    @prop({ type: Array<Partner>})
    public partners?: Array<Partner>;

    @prop({ type: Array<Address>})
    public address!: Array<Address>;
}

export interface CompanyRepo {
    create(name: string, description): Promise<Company|null>
    update(id:string,name: string,description: string,partners:Array<Partner>,address:Array<Address>): Promise<Company>
    get(name: string): Promise<Company|null>
}
