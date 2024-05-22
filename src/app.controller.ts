import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation } from '@nestjs/swagger';

class HelloQuery {
  /**
   * username description
   * @example shaun
   */
  name: string
  /**
   * age description
   * @example 35 
   */
  age?: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * This is endpoint
   * @description This is endpoint description
   * @summary This is endpoint summary
   */
  @Get()
  // Must use following statement and work :(
  // @ApiOperation({ description: 'Endpint description created by `ApiOperation`' })
  getHello(@Query() query: HelloQuery): string {
    return this.appService.getHello();
  }
}
