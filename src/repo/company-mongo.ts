import { Company, CompanyRepo,Address,Partner } from '../model/company'
import { getModelForClass } from '@typegoose/typegoose';

const CompanyModel = getModelForClass(Company);

export class CompanyMongo implements CompanyRepo {
    async create(name: string,description: string): Promise<Company | null> {
        const model = {
            name: name,
            description: description,
        }
        const company = await CompanyModel.create(model)
        return company
    }
    async update(id: string,name: string,description: string,partners:Array<Partner>,address:Array<Address>): Promise<Company | any> {
        const model = {
            name: name,
            description: description,
            partners:partners,
            address: address
        }
        const company = await CompanyModel.findByIdAndUpdate({_id: id}, model)
        return company
    }
    async get(name: string): Promise<Company|null> {
        const company = await CompanyModel.findOne({name:name})
        return company
    }
}
