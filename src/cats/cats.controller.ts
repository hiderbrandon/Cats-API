import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {

    @Post()
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    create(@Body(`hola`) myBody) {
        return `this action adds a new cat \n-${myBody}`
    }

    @Get()
    findAll(): string { //optional i can use the req from express (@Req() req: Request)
        return `This should be the list of all cats`
    }

    @Get(':id?')
    findOne(@Param(`id`) id): string {
        return `This action returns a #${id} cat`;
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }


}
