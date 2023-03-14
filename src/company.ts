export class Partner {
  name: string;
  description: string;
}

export class Address {
  city: string;
  country: string;
  zipcode: string;
}

class Company {
  constructor(
    public name: string = '',
    public description: string = '',
    public partners: Partner[] = [],
    public address: Address[] = []
  ) {}
}

export class UpdateCompanyDto {
  name: string;
  description: string;
  // more field
}

export class CompanyBuilder {
  private company: Company = new Company();

  setName(name: string): CompanyBuilder {
    this.company.name = name;
    return this;
  }

  setDescription(description: string): CompanyBuilder {
    this.company.description = description;
    return this;
  }

  setPartners(partners: Partner[]): CompanyBuilder {
    this.company.partners = partners;
    return this;
  }

  setAddress(address: Address[]): CompanyBuilder {
    this.company.address = address;
    return this;
  }

  build(): Company {
    return this.company;
  }
}