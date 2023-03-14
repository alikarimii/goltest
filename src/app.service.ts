import { Injectable } from '@nestjs/common';
import { CompanyBuilder } from './company';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  update(steps: any): boolean {
    const newCompany = new CompanyBuilder()
      .setName(steps.name)
      .setDescription(steps.description)
      .setPartners(steps.partners)
      .setAddress(steps.address)
      .build();

    console.log(newCompany);
    return true;
  }
}
