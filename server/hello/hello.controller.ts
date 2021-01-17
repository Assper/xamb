import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get('/')
  hello(): { message: string } {
    return {
      message: 'Hello'
    }
  }
}
