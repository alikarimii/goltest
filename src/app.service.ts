import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  update(steps: any): boolean {
    // implement
    console.log(steps);
    return true;
  }
}
