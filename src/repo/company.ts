import { CompanyRepo } from '../model/company'
import { CompanyMongo } from './company-mongo'

export function getCompany(): CompanyRepo {
    return new CompanyMongo()
}
