import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UpdateCompanyDto } from './company';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  update(@Body() updateCompanyDto: UpdateCompanyDto): string {
    let ok = this.appService.update(updateCompanyDto);
    if (!ok) {
      return 'nok';
    }
    return 'ok';
  }
}
