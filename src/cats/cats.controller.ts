// import { Controller } from '@nestjs/common';

// @Controller('cats')
// export class CatsController {}


// import { Controller, Get, Req } from '@nestjs/common';
// import { Request } from 'express';

// @Controller('cats')
// export class CatsController {
//   @Get()
//   findAll(@Req() request: Request): string {
//     return 'This action returns all cats';
//   }
// }


import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    getHello(): string {
        return '========1======>';
    }
    @Get('cat')
    getHello1(): string {
        return '=======2=======';
    }
    @Post()
    create(): string {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
}