import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

//i oould use @Global() decorator to make it aviable globaly , may i use it with database module ?
@Module({
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]
})
export class CatsModule { }
