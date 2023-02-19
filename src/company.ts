export class Partner {
  name: string;
  description: string;
}

export class Address {
  city: string;
  country: string;
  zipcode: string;
}

export class Company {
  name: string;
  description: string;
  partners: Partner[];
  address: Address[];
  // more and more field here
}

export class UpdateCompanyDto {
  name: string;
  description: string;
  // more field
}
