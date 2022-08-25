import { Body, Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req } from '@nestjs/common';
//import { Request } from 'express';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { CatsService } from "./cats.service";
import { Cat } from 'src/cats/entities/cat';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) { }

    @Post()
    @HttpCode(204)
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> { //optional i can use the req from express (@Req() req: Request)
        return this.catsService.findAll();
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
