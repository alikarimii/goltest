import {Address,Partner} from './model/company'

export class UpdateCompanyDto {
  id: string;
  name: string;
  description: string;
  address: Array<Address>;
  partners: Array<Partner>;
}
