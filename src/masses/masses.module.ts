import { Module } from '@nestjs/common';
import { MassesController } from './masses.controller';
import { MassesService } from './masses.service';
import { MassesServiceInterface } from './interfaces/masses-service.interface';

const massesServiceProvider = {provide: MassesServiceInterface, useClass: MassesService};

@Module({
    imports: [],
    providers: [massesServiceProvider],
    controllers: [MassesController],
})
export class MassesModule { }
