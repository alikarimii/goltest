import { Injectable } from '@nestjs/common';
import { getCompany } from './repo/company';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  update(model: any): object {
    const company = getCompany()
    company.update(model.id, model.name, model.description, model.partners, model.address)
    return company;
  }
}
